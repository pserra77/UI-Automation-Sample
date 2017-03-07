var path = require('path');

module.exports = {
  tags: ['sanity'],
  
  'Menu should be visible': function (client) {
    var home = client.page.navigation();
    home.navigate();
    client.pause(1000);
    home.expect.section('@menu').to.be.visible;
    client.end();
  },

  'Employee list should be shown' : function(client) {
    var home  = client.page.navigation();
    home.navigate();
    var employee = client.page.employee();
    employee.expect.element('@employeeName').text.to.equal('Scott Tiger');
    client.end();
  }
};
