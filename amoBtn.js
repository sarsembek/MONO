(function(a,m,o,c,r,m){a[m]={id:"382913",hash:"3399633976d4172545d6a41217ecf8504e7661ee500c4e820ccd62e6f1d6b891",locale:"ru",inline:true,setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};a[o+'Config']=a[o+'Config']||{};a[o+'Config'].hidden=!0;var d=a.document,s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.amocrm.ru/js/button.js?1679599230';d.head&&d.head.appendChild(s)}(window,0,'amoSocialButton',0,0,'amo_social_button'));
window.amoSocialButtonConfig = {
    hidden: false, // скрыть кнопку при загрузке страницы
    color: '#000', // изменить цвет кнопки через, проигнорирует цвет настроенный в amoCRM
  
    onlinechat: {
      mode: 'widget', // еще может быть 'frame', об этом ниже
      user_id: '', // id пользователя онлайн-чата (необязательный параметр)
  
      locale: {
        extends: "ru",
        compose_placeholder: "Напишите ваш вопрос...",
      },
  
      theme: {
        header: false,
      },
    },
  };
window.amoSocialButtonConfig = {
  onlinechat: {
    theme: {
      background: 'yellow', // фон
      system_color: 'pink', // цвет системных текстов (статус доставки, дата)
      header: { // можно указать header: false, тогда он вообще не будет отрисован
        background: 'skyblue', // цвет фона верхней части чата
        color: 'black', // цвет текста верхней части
      },
      message: {
        outgoing_background: 'red', // фон сообщения пользователя
        outgoing_color: 'white', // цвет текста сообщения пользователя
        incoming_background: 'blue', // фон ответа оператора
        incoming_color: 'white', // цвет текста ответа оператора
      },
      compose: {
        height: 100, // минимальная высота в пикселях (максимальная 170px, изменить ее нельзя)
        button_background: 'black', // фон кнопки отправки
      }
    },
  },
};