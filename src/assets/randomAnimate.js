const randomAnimate = () => {
  const animateRandom = [
    'animate__backInDown',
    'animate__backInLeft',
    'animate__backInRight',
    'animate__bounceIn',
    'animate__bounceInDown',
    'animate__fadeInDown',
    'animate__fadeIn',
    'animate__fadeInDownBig',
    'animate__fadeInLeft',
    'animate__fadeInUp',
    'animate__flipInX',
    'animate__flipInY',
    'animate__rotateInDownLeft',
    'animate__jackInTheBox',
    'animate__zoomIn',
    'animate__zoomInDown',
    'animate__zoomInLeft',
    'animate__slideInDown',
  ]
  const max = animateRandom.length - 1
  const min = 0

  return animateRandom[Math.floor(Math.random() * (max - min))]
}

export { randomAnimate }
