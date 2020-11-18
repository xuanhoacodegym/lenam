$(document).ready(function () {
    addDropLib();
    modal();
    rotateIcon();
  });

function addDropLib(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js';
    document.body.appendChild(script);
}  

function rotateIcon(){
    $(function(){
        $('.search-link').click(function(){
            //クリックされた要素に隣接する要素が開いたり閉じたりする。
            var $this = $(this);

            var $target = $($this.children()[0]);
            if($target.hasClass("down")){
                $target.removeClass("down");
            }else if($target.hasClass("icon-right-dir")){
                $target.addClass("down");
            };
        });
    });
  }
  function modal() {
    $('.drawer').drawer();
  };