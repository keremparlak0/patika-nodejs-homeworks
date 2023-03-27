const circleArea = (radius) => {
    // π*r^2
    console.log(3.14 * radius * radius)
}

const circleCircumference = (radius) => {
    // 2*π*r
    console.log(3.14 * 2 * radius)
}

module.exports = {
    circleArea,
    circleCircumference
}