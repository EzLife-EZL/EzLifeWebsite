<script setup>
import { ref } from "vue";
const activeTab = ref("privacy");

// Dữ liệu chính sách
const policies = {
  privacy: {
    title: "Chính sách bảo mật",
    icon: "🔒",
    sections: [
      {
        heading: "1. Thu thập thông tin",
        content:
          "Chúng tôi thu thập thông tin cá nhân mà bạn cung cấp khi đăng ký dịch vụ, bao gồm: tên, email, số điện thoại, địa chỉ. Thông tin này được sử dụng để cung cấp và cải thiện dịch vụ của chúng tôi.",
      },
      {
        heading: "2. Sử dụng thông tin",
        content:
          "Thông tin của bạn được sử dụng để: Cung cấp dịch vụ theo yêu cầu, liên hệ hỗ trợ kỹ thuật, gửi thông tin cập nhật về dịch vụ, và cải thiện chất lượng sản phẩm.",
      },
      {
        heading: "3. Bảo vệ thông tin",
        content:
          "EzLife cam kết bảo vệ thông tin khách hàng bằng các biện pháp bảo mật tiên tiến: mã hóa SSL/TLS, tường lửa, hệ thống phát hiện xâm nhập, và kiểm tra bảo mật định kỳ.",
      },
      {
        heading: "4. Chia sẻ thông tin",
        content:
          "Chúng tôi không bán, trao đổi hay cho thuê thông tin cá nhân của bạn với bên thứ ba, trừ khi có sự đồng ý của bạn hoặc theo yêu cầu pháp luật.",
      },
    ],
  },
  terms: {
    title: "Điều khoản sử dụng",
    icon: "📋",
    sections: [
      {
        heading: "1. Chấp nhận điều khoản",
        content:
          "Khi sử dụng dịch vụ của EzLife, bạn đồng ý tuân thủ các điều khoản và điều kiện được quy định. Vui lòng đọc kỹ trước khi sử dụng.",
      },
      {
        heading: "2. Quyền sở hữu trí tuệ",
        content:
          "Tất cả nội dung, thiết kế, mã nguồn và tài liệu trên website thuộc quyền sở hữu của EzLife. Nghiêm cấm sao chép, phân phối mà không có sự cho phép.",
      },
      {
        heading: "3. Trách nhiệm người dùng",
        content:
          "Người dùng chịu trách nhiệm về: Bảo mật tài khoản, sử dụng dịch vụ đúng mục đích, không vi phạm pháp luật, không gây hại cho hệ thống hoặc người dùng khác.",
      },
      {
        heading: "4. Giới hạn trách nhiệm",
        content:
          "EzLife không chịu trách nhiệm về thiệt hại gián tiếp phát sinh từ việc sử dụng dịch vụ. Chúng tôi cam kết nỗ lực tối đa để đảm bảo dịch vụ hoạt động ổn định.",
      },
    ],
  },
  payment: {
    title: "Chính sách thanh toán",
    icon: "💳",
    sections: [
      {
        heading: "1. Phương thức thanh toán",
        content:
          "Chúng tôi chấp nhận: Chuyển khoản ngân hàng, thanh toán qua ví điện tử (Momo, ZaloPay, VNPay), thanh toán trực tiếp tại văn phòng, và thanh toán quốc tế qua Paypal.",
      },
      {
        heading: "2. Quy trình thanh toán",
        content:
          "Thanh toán được thực hiện theo tiến độ dự án: 30% đặt cọc khi ký hợp đồng, 40% khi hoàn thành 50% dự án, 30% còn lại khi bàn giao và nghiệm thu.",
      },
      {
        heading: "3. Hóa đơn VAT",
        content:
          "EzLife xuất hóa đơn VAT đầy đủ theo quy định pháp luật. Hóa đơn được gửi qua email hoặc bản cứng theo yêu cầu khách hàng trong vòng 5 ngày làm việc.",
      },
      {
        heading: "4. Hoàn tiền",
        content:
          "Chính sách hoàn tiền áp dụng trong trường hợp: Dịch vụ không đáp ứng cam kết, lỗi từ phía EzLife, hoặc hủy dự án trước khi bắt đầu (trừ phí đặt cọc 10%).",
      },
    ],
  },
  warranty: {
    title: "Chính sách bảo hành",
    icon: "🛡️",
    sections: [
      {
        heading: "1. Thời gian bảo hành",
        content:
          "Website/App được bảo hành miễn phí 12 tháng kể từ ngày bàn giao. Bảo hành bao gồm: sửa lỗi kỹ thuật, cập nhật bảo mật, tối ưu hiệu năng.",
      },
      {
        heading: "2. Điều kiện bảo hành",
        content:
          "Bảo hành được áp dụng khi: Lỗi phát sinh từ code của EzLife, hệ thống chưa bị can thiệp bởi bên thứ ba, và khách hàng sử dụng đúng hướng dẫn.",
      },
      {
        heading: "3. Hỗ trợ kỹ thuật",
        content:
          "Đội ngũ kỹ thuật hỗ trợ 24/7 qua: Hotline, email, Zalo, và hệ thống ticket. Thời gian phản hồi trung bình: khẩn cấp 2h, bình thường 24h.",
      },
      {
        heading: "4. Ngoài phạm vi bảo hành",
        content:
          "Không bảo hành: Lỗi do sử dụng sai, thiên tai, tấn công mạng bên ngoài, yêu cầu thay đổi tính năng mới, hoặc nâng cấp phần cứng máy chủ.",
      },
    ],
  },
};

const tabs = [
  { key: "privacy", label: "Bảo mật", icon: "🔒" },
  { key: "terms", label: "Điều khoản", icon: "📋" },
  { key: "payment", label: "Thanh toán", icon: "💳" },
  { key: "warranty", label: "Bảo hành", icon: "🛡️" },
];
</script>

<template>
  <div class="policy-page">
    <!-- Header -->
    <section class="policy-header">
      <h1>Chính Sách & Điều Khoản</h1>
      <p>Cam kết minh bạch, bảo vệ quyền lợi khách hàng</p>
    </section>

    <!-- Tab Navigation -->
    <div class="tabs-container">
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          :class="['tab', { active: activeTab === tab.key }]"
          @click="activeTab = tab.key"
        >
          <span class="tab-icon">{{ tab.icon }}</span>
          <span class="tab-label">{{ tab.label }}</span>
        </button>
      </div>
    </div>

    <!-- Content -->
    <section class="policy-content">
      <div class="content-wrapper">
        <div class="policy-title">
          <span class="title-icon">{{ policies[activeTab].icon }}</span>
          <h2>{{ policies[activeTab].title }}</h2>
        </div>

        <div class="policy-sections">
          <article
            v-for="(section, index) in policies[activeTab].sections"
            :key="index"
            class="policy-section"
          >
            <h3>{{ section.heading }}</h3>
            <p>{{ section.content }}</p>
          </article>
        </div>

        <!-- Contact CTA -->
        <div class="policy-footer">
          <div class="footer-content">
            <h3>Còn thắc mắc?</h3>
            <p>Liên hệ với chúng tôi để được tư vấn chi tiết</p>
            <div class="footer-buttons">
              <a href="#" class="btn-primary">
                <span>📞</span> Hotline: 0123.456.789
              </a>
              <a href="#" class="btn-secondary">
                <span>✉️</span> Email: contact@ezlife.vn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.policy-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f2027 0%, #999999 50%, #0f2027 100%);
  padding-bottom: 3rem;
}

/* Header */
.policy-header {
  text-align: center;
  padding: 4rem 2rem 3rem;
  color: #fff;
}

.policy-header h1 {
  font-size: 2.8rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: fadeInDown 0.8s ease-out;
}

.policy-header p {
  font-size: 1.2rem;
  opacity: 0.95;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

/* Tabs */
.tabs-container {
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  margin-bottom: 2rem;
}

.tabs {
  display: flex;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.5rem;
  border-radius: 50px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  justify-content: center;
}

.tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: none;
  border-radius: 50px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.tab:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  transform: translateY(-2px);
}

.tab.active {
  background: linear-gradient(135deg, #3ee6c5 0%, #009ee3 100%);
  color: #fff;
  box-shadow: 0 4px 15px rgba(62, 230, 197, 0.4);
  transform: translateY(-2px);
}

.tab-icon {
  font-size: 1.3rem;
}

.tab-label {
  font-weight: 700;
}

/* Content */
.policy-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-wrapper {
  background: #fff;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.policy-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 3px solid #f0f0f0;
}

.title-icon {
  font-size: 3rem;
  animation: bounce 2s infinite;
}

.policy-title h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0;
}

/* Sections */
.policy-sections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.policy-section {
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8f9ff 0%, #fff 100%);
  border-radius: 16px;
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;
  animation: slideInLeft 0.5s ease-out both;
}

.policy-section:nth-child(1) {
  animation-delay: 0.1s;
}
.policy-section:nth-child(2) {
  animation-delay: 0.2s;
}
.policy-section:nth-child(3) {
  animation-delay: 0.3s;
}
.policy-section:nth-child(4) {
  animation-delay: 0.4s;
}

.policy-section:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);
}

.policy-section h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.8rem;
}

.policy-section p {
  font-size: 1rem;
  line-height: 1.8;
  color: #4a4a4a;
  margin: 0;
}

/* Footer */
.policy-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #f0f0f0;
}

.footer-content {
  text-align: center;
}

.footer-content h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
}

.footer-content p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.footer-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.8rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: #fff;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

/* Animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .policy-header h1 {
    font-size: 2rem;
  }

  .policy-header p {
    font-size: 1rem;
  }

  .tabs {
    gap: 0.5rem;
    padding: 0.4rem;
  }

  .tab {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .tab-icon {
    font-size: 1.1rem;
  }

  .content-wrapper {
    padding: 2rem 1.5rem;
  }

  .policy-title h2 {
    font-size: 1.5rem;
  }

  .title-icon {
    font-size: 2.5rem;
  }

  .policy-section h3 {
    font-size: 1.1rem;
  }

  .policy-section p {
    font-size: 0.95rem;
  }

  .footer-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .policy-page {
    padding-bottom: 2rem;
  }

  .policy-header {
    padding: 3rem 1rem 2rem;
  }

  .content-wrapper {
    padding: 1.5rem 1rem;
  }

  .policy-sections {
    gap: 1.5rem;
  }

  .tab-label {
    display: none;
  }

  .tab {
    padding: 0.6rem 0.8rem;
  }
}
</style>
