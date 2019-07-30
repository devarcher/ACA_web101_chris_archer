const projectsList = [
  {
    name: 'Project1',
    desc: 'awesome dogs jumping',
    url: 'https://picsum.photos/200?random=1',
    tags: '#css, #html, #bootstrap',
  },
  {
    name: 'Project2',
    desc: 'awesome dogs jumping',
    url: 'https://picsum.photos/201?random=1',
    tags: '#css, #html, #bootstrap',
  },
  {
    name: 'Project3',
    desc: 'awesome dogs jumping',
    url: 'https://picsum.photos/202?random=1',
    tags: '#css, #html, #bootstrap',
  },
  {
    name: 'Project4',
    desc: 'awesome dogs jumping',
    url: 'https://picsum.photos/203?random=1',
    tags: '#css, #html, #bootstrap',
  },
  {
    name: 'Project5',
    desc: 'awesome dogs jumping',
    url: 'https://picsum.photos/204?random=1',
    tags: '#css, #html, #bootstrap',
  },
  {
    name: 'Project6',
    desc: 'awesome dogs jumping',
    url: 'https://picsum.photos/205?random=1',
    tags: '#css, #html, #bootstrap',
  },
]

let rowDiv = document.querySelector('.row')
console.log('rowDiv', rowDiv)

projectsList.forEach(project => {
  /*console.log('project', project)*/
  let cardTemplate = `<div class="card-deck">
  <div class="card">
    <img src="${ project.url }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${ project.name }</h5>
      <p class="card-text">${ project.desc }</p>
      <p class="card-text"><small class="text-muted">${ project.tags }</small></p>
    </div>
  </div>`
  rowDiv.insertAdjacentHTML('beforeend', cardTemplate)
})