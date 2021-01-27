const URL = 'http://localhost:3000/tasks'


/** API FUNCTIONS */
const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data
}

// fetchData(URL)
//   .then(data => console.log(data))

/* FUNCTIONS */

const taskCardHTML = (task) => {
  const taskCard = document.createElement('div')
  taskCard.classList = 'col-md-3 py-3'
  taskCard.innerHTML = `<div class="card">
  <div class="card-body" id="${task._id}">
    <h5 class="card-title">${task.title} treatment</h5>
    <p class="card-text">${task.description}</p>
    <div class="col-sm-12 d-flex justify-content-around">
    <button class="btn btn-outline-primary btn-sm edit" >Edit</button>
    <button class="btn btn-outline-danger btn-sm delete">Delete</button>
    </div>
  </div>
</div>`
  return taskCard
}


const newCard = (task) => {
  const taskCard = document.createElement('div')
  taskCard.classList = 'col-md-3 py-3'
  const card = document.createElement('div')
  card.classList = 'card'
  const cardBody = document.createElement('div')
  cardBody.classList = 'card-body'
  cardBody.id = task._id
  const title = document.createElement('h5')
  title.classList = 'title'
  title.textContent = task.title
  const description = document.createElement('p')
  description.classList = 'card-text'
  description.textContent = task.description

  cardBody.appendChild(title)
  cardBody.appendChild(description)
  card.appendChild(cardBody)
  taskCard.appendChild(card)
  return taskCard
}


const getTasks = async () => {
  const tasks = await fetchData(URL)
  tasks.forEach(task => {
    const taskCard = taskCardHTML(task)
    root.appendChild(taskCard)
  });
}

const createTask = async (event) => {
  event.preventDefault()
  const formTitle = event.target.title.value
  const formDescription = event.target.description.value
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      title: formTitle,
      description: formDescription
    })
  }

  const { response } = await fetchData(URL, options)
  if (response) {
    location.reload()
  }
}

const logger = () => console.log('Se ha renderizado')

/* Document elements */
const root = document.getElementById('root')
const form = document.getElementById('taskForm')

/**Listeners */
document.addEventListener('DOMContentLoaded', getTasks)

form.addEventListener('submit', createTask)

document.addEventListener('click', (e) => {
  if (e.target.matches('.delete')) {
    const parent = e.target.parentNode.parentNode
    console.log(parent.id)
    fetch(URL + `/${parent.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }
})

// TODO: 1 refactor delete
// TODO: implement edit task