module.exports = {
  url: function() {
    return 'http://localhost:3000/';
  },
  sections: {
    menu: {
      selector: 'id("OnTheGoDefault.Navigation.navLeftIcon")',
      locateStrategy: 'xpath',
      elements: {
        employee: {
          selector: '#OnTheGoDefault\.Navigation\.navLeftSide > div:nth-child(1)'
        },
        preview: {
          selector: '#OnTheGoDefault\.Navigation\.navLeftSide > div:nth-child(2)'
        }
      }
    }
  }
};