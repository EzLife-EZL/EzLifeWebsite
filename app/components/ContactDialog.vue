<template>
  <teleport to="body">
    <div
      v-if="modelValue"
      class="overlay"
      @click.self="close"
      @keydown.esc="close"
      role="dialog"
      aria-modal="true"
    >
      <div class="dialog">
        <!-- Trái: lời chào & nút mạng XH -->
        <div class="left">
          <h2>
            Bạn cần một <br />
            <span class="accent">Website,</span><br />
            <span class="accent">App,</span><br />
            <span class="accent">WebApp</span><br />
            tuyệt vời và mượt mà.
          </h2>

          <p class="desc">
            Liên hệ ngay tới <a href="/" class="brand">EzLife</a>, chúng tôi sẽ hỗ trợ
            <span class="accent2">Quý khách</span> một cách tốt nhất.
          </p>

          <div class="actions">
            <a class="chip" href="https://zalo.me" target="_blank" rel="noreferrer">Zalo</a>
            <a class="chip" href="https://m.me" target="_blank" rel="noreferrer">Messenger</a>
            <a class="chip" :href="`tel:${phone}`">Gọi ngay</a>
          </div>
        </div>

        <!-- Phải: Form -->
        <div class="right">
          <form @submit.prevent="handleSubmit" novalidate>
            <label class="field">
              <input v-model.trim="form.name" type="text" placeholder="Họ và tên" required />
            </label>

            <label class="field">
              <input v-model.trim="form.phone" type="tel" placeholder="Số điện thoại" required />
            </label>

            <label class="field">
              <input v-model.trim="form.email" type="email" placeholder="Email" required />
            </label>

            <label class="field">
              <input v-model.trim="form.service" type="text" placeholder="Vui lòng chọn dịch vụ" />
            </label>

            <label class="field textarea">
              <textarea v-model.trim="form.note" rows="4" placeholder="Yêu cầu cụ thể (nếu có)"></textarea>
            </label>

            <label class="checkbox">
              <input type="checkbox" v-model="notRobot" />
              <span>Tôi không phải người máy</span>
            </label>

            <button class="submit" type="submit" :disabled="submitting">
              {{ submitting ? 'ĐANG GỬI...' : 'GỬI YÊU CẦU' }}
            </button>
          </form>
        </div>

        <button class="close" @click="close" aria-label="Đóng">×</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { reactive, ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  phone: { type: String, default: '0123456789' },
})
const emit = defineEmits(['update:modelValue', 'submit'])

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  note: '',
})
const notRobot = ref(false)
const submitting = ref(false)

function close() {
  emit('update:modelValue', false)
}

async function handleSubmit() {
  if (!notRobot.value) {
    alert('Vui lòng xác nhận “Tôi không phải người máy”.')
    return
  }
  if (!form.name || !form.phone || !form.email) {
    alert('Vui lòng điền đầy đủ Họ tên, SĐT và Email.')
    return
  }
  submitting.value = true
  try {
    // TODO: gọi API của bạn ở đây
    // await $fetch('/api/contact', { method: 'POST', body: form })
    emit('submit', { ...form })
    alert('✅ Gửi yêu cầu thành công!')
    close()
  } catch (e) {
    alert('❌ Gửi thất bại, thử lại sau.')
  } finally {
    submitting.value = false
  }
}

// Khóa scroll khi mở modal
const prevOverflow = ref('')
watch(
  () => props.modelValue,
  (v) => {
    if (typeof document === 'undefined') return
    if (v) {
      prevOverflow.value = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = prevOverflow.value || ''
    }
  },
)
onMounted(() => {
  if (props.modelValue) document.body.style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  document.body.style.overflow = prevOverflow.value || ''
})
</script>

<style scoped>
/* Overlay */
.overlay {
  position: fixed; inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: grid; place-items: center;
  z-index: 1000;
}

/* Dialog card */
.dialog {
  position: relative;
  width: min(960px, 92vw);
  background: #0d7f8a; /* nền xanh như ảnh */
  color: #eaf8fb;
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 20px 60px rgba(0,0,0,.35);
  border: 4px solid #ffffff;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 20px;
}

/* Left column */
.left h2 {
  font-size: 28px;
  line-height: 1.25;
  margin: 0 0 12px 0;
}
.accent { color: #09c1ea; font-weight: 800; }
.accent2 { color: #b9f1ff; }
.brand { color: #fff; font-weight: 700; text-decoration: underline; }
.desc { opacity: .95; margin: 10px 0 18px; }
.actions { display: flex; gap: 12px; align-items: center; }
.chip {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 10px 14px; border-radius: 999px;
  background: rgba(255,255,255,.15); color: #fff; text-decoration: none;
  backdrop-filter: blur(2px);
}
.chip:hover { background: rgba(255,255,255,.25); }

/* Right column (form) */
.right {
  background: #e6fbff;
  border-radius: 12px;
  padding: 16px;
  color: #0b3b43;
}
form { display: grid; gap: 10px; }
.field input, .field textarea {
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 2px solid #1aa7b6;
  outline: none;
  background: #fff;
  font-size: 14px;
}
.field input::placeholder, .field textarea::placeholder { color: #699; }
.textarea textarea { resize: vertical; }
.checkbox {
  display: flex; gap: 8px; align-items: center;
  font-size: 13px; color: #123e44; margin-top: 4px;
}
.submit {
  margin-top: 6px;
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  background: #0aa1b1;
  color: #fff; font-weight: 800; letter-spacing: .5px;
  cursor: pointer;
}
.submit:disabled { opacity: .6; cursor: not-allowed; }

/* Close button */
.close {
  position: absolute; top: 6px; right: 10px;
  background: transparent; border: 0; color: #fff;
  font-size: 28px; line-height: 1; cursor: pointer;
}

/* Responsive */
@media (max-width: 820px) {
  .dialog { grid-template-columns: 1fr; }
  .left { order: 2; }
  .right { order: 1; }
}
</style>
