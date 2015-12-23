$(function () {
    console.log('jquery loaded');
    $(".select ").dropdown({ "autoinit ": ".select " });
    $.material.init();
    
    startCoinManagement();
});