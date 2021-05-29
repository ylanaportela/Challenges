window.onload = function (){

  function updateSliderValue(value) {

    const pageViewsLabel = document.querySelector(".value-pageview");
    const pageView = document.querySelector(".pageview");
    const priceLabel = document.querySelector(".value-price .value");
    const inputTarget = document.querySelector(".range-slider")
    const progress = document.querySelector(".progress")

    const plans = {
      1: {
        pageViews: 10,
        views: 'K',
        price: "8.00",
        inputBg: "0%"
      },

      2: {
        pageViews: 50,
        views: 'k',
        price: "12.00",
        inputBg: "25%" 
      },

      3: {
        pageViews: 100,
        views: 'K',
        price: "16.00",
        inputBg: "50%"
      },

      4: {
        pageViews: 150,
        views: 'K',
        price: "24.00",
        inputBg: "75%"
      },

      5: {
        pageViews: 1,
        views: 'M',
        price: "32.00",
        inputBg: "100%"
      }
    }

    // existe um plano com esse valor que foi passado na função
    if (plans[value] !== undefined) {
      // a gente guarda esse plano existente numa variável para facilitar nossa vida
      const plan = plans[value]
      // a gente faz quaisquer alterações que queiramos no plano selecionado
      pageViewsLabel.innerHTML = plan.pageViews;
      priceLabel.innerHTML = plan.price;
      pageView.innerHTML = plan.views;
      progress.style.width = plan.inputBg


      document.querySelector(".slider").addEventListener('change',function(){

        if(document.querySelector(".slider").checked == true){
          priceLabel.innerHTML = plan.price * 0.25;
        }

        else{
          priceLabel.innerHTML = plan.price;
        }
        
      })
    }
  }

  updateSliderValue(3);
  

  document.querySelector(".range-slider").addEventListener('input', function(e) {
    updateSliderValue(e.target.value);
  })
}
