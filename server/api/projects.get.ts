export default defineEventHandler(async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return [{
        id: 1,
        name: 'Wolfoo World - Hệ sinh thái Wolfoo với 13,2 triệu sub trên Youtube',
        description: 'Mô tả dự án 1',
        status: 'Đang tiến hành',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        teamMembers: ['Nguyễn Văn A', 'Trần Thị B'],
    }, {
        id: 2,
        name: 'Wolfoo World - Hệ sinh thái Wolfoo với 13,2 triệu sub trên Youtube',
        description: 'Mô tả dự án 2',
        status: 'Hoàn thành',
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        teamMembers: ['Lê Văn C', 'Phạm Thị D'],
    }
        , {
        id: 3,
        name: 'Wolfoo World - Hệ sinh thái Wolfoo với 13,2 triệu sub trên Youtube',
        description: 'Mô tả dự án 2',
        status: 'Hoàn thành',
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        teamMembers: ['Lê Văn C', 'Phạm Thị D'],
    }
        , {
        id: 4,
        name: 'Wolfoo World - Hệ sinh thái Wolfoo với 13,2 triệu sub trên Youtube',
        description: 'Mô tả dự án 2',
        status: 'Hoàn thành',
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        teamMembers: ['Lê Văn C', 'Phạm Thị D'],
    }
        , {
        id: 5,
        name: 'Wolfoo World - Hệ sinh thái Wolfoo với 13,2 triệu sub trên Youtube',
        description: 'Mô tả dự án 2',
        status: 'Hoàn thành',
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        teamMembers: ['Lê Văn C', 'Phạm Thị D'],
    }
        , {
        id: 6,
        name: 'Wolfoo World - Hệ sinh thái Wolfoo với 13,2 triệu sub trên Youtube',
        description: 'Mô tả dự án 2',
        status: 'Hoàn thành',
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        teamMembers: ['Lê Văn C', 'Phạm Thị D'],
    }
    ]
})