export const getNav = () => {
    return {
        'getting-started': {
            title: 'Getting Started',
            links: ['installation', 'quick-start', 'general'],
            linksTitle: ['Installation 安装', 'Quick Start 快速开始', 'General 概述'],
        },
        customizations: {
            title: 'Customizations',
            links: ['styles', 'theming'],
            linksTitle: ['Styles 自定义样式', 'Theming 主题'],
        },
        components: {
            title: 'Components',
            links: [
                'Buttons', 
                'Cards', 
                'Lists', 
                'Reboot', 
                'Ripples', 
                'Switch', 
                'Textarea',
                'TextField', 
                'Typography'
            ],
            linksTitle: [
                'Buttons 按钮', 
                'Cards 卡片', 
                'Lists 列表', 
                'Reboot 初始化', 
                'Ripples 涟漪', 
                'Switch 开关', 
                'Textarea 多行文本',
                'TextField 输入框', 
                'Typography 字体'
            ],
        },
    };
};