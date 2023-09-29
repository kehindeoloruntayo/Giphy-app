import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Logo from './assets/img/logo.png';
import GifController from './js/gif.js';

class UIController {
  static initialize() {
    $(".navbar-brand img").attr("src", Logo);
    $("link").attr("href", Logo);
    $('#input-group-button-right').click(UIController.handleSearch);
    $('#trending').click(UIController.handleTrending);
    $('#random').click(UIController.handleRandom);
    $('#upload').click(UIController.handleUpload);
  }

  static handleSearch() {
    const name = $('input#gifName').val();
    $('input#gifName').val("");
    GifController.searchGifs(name, UIController.displayGifs, UIController.displayError);
  }

  static handleTrending() {
    GifController.getTrendingGifs(UIController.displayGifs1, UIController.displayError);
  }

  static handleRandom() {
    GifController.getRandomGif(UIController.displayGifs2, UIController.displayError);
  }

  static handleUpload() {
    GifController.uploadGif(UIController.uploadGifs, UIController.displayError);
  }

  static displayGifs(response) {
    $('.gif1').html(`<img src="${response.data[0].images.fixed_height.url}">`);
    $('.gif2').html(`<img src="${response.data[1].images.fixed_height.url}">`);
    $('.gif3').html(`<img src="${response.data[2].images.fixed_height.url}">`);
    $('.gif4').html(`<img src="${response.data[3].images.fixed_height.url}">`);
    $('.gif5').html(`<img src="${response.data[4].images.fixed_height.url}">`);
    $('.gif6').html(`<img src="${response.data[5].images.fixed_height.url}">`);
    $('.gif7').html(`<img src="${response.data[6].images.fixed_height.url}">`);
    $('.gif8').html(`<img src="${response.data[7].images.fixed_height.url}">`);
    $('.gif9').html(`<img src="${response.data[8].images.fixed_height.url}">`);
    $('.gif10').html(`<img src="${response.data[9].images.fixed_height.url}">`);
    $('.gif11').html(`<img src="${response.data[10].images.fixed_height.url}">`);
    $('.gif12').html(`<img src="${response.data[11].images.fixed_height.url}">`);
    $(".error").text('');
  }

  static displayError(errorMessage) {
    $(".error").text(errorMessage);
  }

  static displayGifs1(response) {
      $('.gif1').html(`<img src="${response.data[0].images.fixed_height.url}">`);
      $('.gif2').html(`<img src="${response.data[1].images.fixed_height.url}">`);
      $('.gif3').html(`<img src="${response.data[2].images.fixed_height.url}">`);
      $('.gif4').html(`<img src="${response.data[3].images.fixed_height.url}">`);
      $('.gif5').html(`<img src="${response.data[4].images.fixed_height.url}">`);
      $('.gif6').html(`<img src="${response.data[5].images.fixed_height.url}">`);
      $('.gif7').html(`<img src="${response.data[6].images.fixed_height.url}">`);
      $('.gif8').html(`<img src="${response.data[7].images.fixed_height.url}">`);
      $('.gif9').html(`<img src="${response.data[8].images.fixed_height.url}">`);
      $('.gif10').html(`<img src="${response.data[9].images.fixed_height.url}">`);
      $('.gif11').html(`<img src="${response.data[10].images.fixed_height.url}">`);
      $('.gif12').html(`<img src="${response.data[11].images.fixed_height.url}">`);
      $(".error").text('');
    }

  static displayError(errorMessage) {
    $(".error").text(errorMessage);
  }

  static displayGifs2(response) {
    $('.gif1').html(`<img src="${response.data.images.fixed_height.url}">`);
    $('.gif2').html(``);
    $('.gif3').html(``);
    $('.gif4').html(``);
    $('.gif5').html(``);
    $('.gif6').html(``);
    $('.gif7').html(``);
    $('.gif8').html(``);
    $('.gif9').html(``);
    $('.gif10').html(``);
    $('.gif11').html(``);
    $('.gif12').html(``);
    $(".error").text('');
  }

static displayError(errorMessage) {
  $(".error").text(errorMessage);
}
}

$(document).ready(() => {
  UIController.initialize();
});