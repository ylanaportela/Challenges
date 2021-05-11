function itemStatus(element) {
  return element.parentNode.classList.contains("accordion-item-changes")
}

function open(element) {
  element.parentNode.classList.add("accordion-item-changes");
}

function close(element) {
  element.parentNode.classList.remove("accordion-item-changes")
}

function thereIsAnOpenItem() {
  return document.querySelector('.accordion-item-changes')
}

function closeAll() {
  document.querySelector('.accordion-item-changes').classList.remove('accordion-item-changes')
}


function openAnswer(element){
  

  if (itemStatus(element) == false) {
    
    if (thereIsAnOpenItem()) {
      closeAll()
    }

    open(element)

  } else {
    
    close(element)

  }
  
}