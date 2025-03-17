// code your solution here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun());

const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork());

function wrapAdjective(wrapper = "*") {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
