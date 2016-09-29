$('#wow-vanilla').click(function () {
  $('#game-title h1').text('World of Warcraft : Vanilla');
  $('#text').text('World of Warcraft was released on the 23 of november 2004, after the first day it had sold more than 240,000 copies.');
});

$('#wow-tbc').on('click', function () {
  $('#game-title h1').text('World of Warcraft : The Burning Crusade');
  $('#text').text('The first expansion pack for WoW had sold more then 2.4 Million copies making it one of the fastest selling pc games back then.');
});

$('#wow-wrath').on('click', function () {
  $('#game-title h1').text('World of Warcraft : Wrath of the Lich King');
  $('#text').text('When the second expansion hit the sales number kept going up and it hit 2.8 Million copies sold during the first day.');
});

$('#wow-cata').on('click', function () {
  $('#game-title h1').text('World of Warcraft : Cataclysm');
  $('#text').text('The third expansion, cataclysm broke the 3m mark and sold 3.3 Million copies during the first 24 hours of release.');
});

$('#wow-mists').on('click', function () {
  $('#game-title h1').text('World of Warcraft : Mists of Pandaria');
  $('#text').text('Mists of Pandaria were probably the start of world of warcrafts loss in popularity, only selling 2.7 Million copies in the first day.');
});

$('#wow-wod').on('click', function () {
  $('#game-title h1').text('World of Warcraft : Warlords of Draenor');
  $('#text').text('Warlords of Draenor did get some players back and increased it sales in the first 24 hours too 3.3 Million, the same as Cataclysm.');
});

$('#wow-legion').on('click', function () {
  $('#game-title h1').text('World of Warcraft : Legion');
  $('#text').text('Warlords of Draenor did get some players back and increased it sales in the first 24 hours too 3.3 Million, the same as Cataclysm.');
});

$('.game-logo').on('click', function () {
  $('#container-img').fadeToggle("slow");
  $('#container-img').prop('src', this.alt);
})

$('.game-logo').hover(makeBigger, returnToOriginalSize);

function makeBigger() {
  $(this).css({
    height: '+=7%',
    width: '+=7%'
  });
}

function returnToOriginalSize() {
  $(this).css({
    height: "",
    width: ""
  });
}