if (/MicroMessenger/.test(window.navigator.userAgent)) {
    alert('微信客户端');
} else if (/AlipayClient/.test(window.navigator.userAgent)) {
    alert('支付宝客户端');
} else {
    alert('其他浏览器');
}

