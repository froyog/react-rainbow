export const getNav = () => {
    return {
        'getting-started': {
            title: 'Getting Started',
            links: ['installation', 'quick-start', 'general'],
            linksTitle: ['Installation 安装', 'Quick Start 快速开始', 'General 概述'],
        },
        customizations: {
            title: 'Customizations',
            links: ['styles'],
            linksTitle: ['Styles 自定义样式'],
        },
        components: {
            title: 'Components',
            links: ['Buttons', 'List', 'Switch', 'Typography'],
            linksTitle: ['Buttons 按钮', 'List 列表', 'Switch 开关', 'Typography 字体'],
        },
    };
};