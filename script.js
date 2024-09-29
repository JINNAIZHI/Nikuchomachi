// Barba.js 初始化
barba.init({
  transitions: [{
    name: '肉球町',  // 动画名称
    leave(data) {
      return gsap.to(data.current.container, { opacity: 0, duration: 1 });
    },
    enter(data) {
      return gsap.from(data.next.container, { opacity: 0, duration: 1 });
    }
  }]
});
