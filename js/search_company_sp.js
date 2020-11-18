$(document).ready(function () {
  inputPointModal();
  searchPointModal();
  showBaseInput();
});

function inputPointModal() {
  $(".input-point").click(function () {
    $(".modal-input-point").show();
  });
  $(".modal-close-button").click(function () {
    $(".modal-input-point").hide();
  });
  $(".modal-close").click(function () {
    $(".modal-input-point").hide();
  });
}

function searchPointModal() {
  $(".search-point").click(function () {
    $(".modal-search-point").show();
  });
  $(".modal-close-button").click(function () {
    $(".modal-search-point").hide();
  });
  $(".modal-close").click(function () {
    $(".modal-search-point").hide();
  });
}

function showBaseInput() {
  $("input[name='company']").change(function () {
    var radioStatus = $(this).val();
    console.log(radioStatus);
    if (radioStatus == 1) {
      $('.base-input').prop('disabled', true);
      $('.base-require').hide();
      $('.base-input').css("background-color", "#f7f7f7");
      $('.base-input').removeAttr('placeholder');
    } else {
      $('.base-input').prop('disabled', false);
      $('.base-require').css("display", "inline-block");
      $('.base-input').css("background-color", "#fff");
      $(".base-input").attr('placeholder', '〇〇支店・支部など');
    }
  });

}