let age = 0

document.getElementById('button').addEventListener('click', check)

function check () {
  age = document.getElementById('age').value
  age = parseInt(age)
  if (age > 17) {
    alert('You can see a R rated movie alone.')
  } else if (age >= 13) {
    alert('You can see a PG-13 movie alone.')
  } else if (age >= 5) {
    alert('You can see a g or pg movie alone.')
  } else {
    alert('Uh. You`re too young to see most things.')
  }
}
}
