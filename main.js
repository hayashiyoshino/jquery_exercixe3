var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];


$(function() {
  var list = $("#list");

  function appendList(word) {
    var item = $('<li class="list">').append(word);
    list.append(item);
  }

  $("#submit").on("click", function() {
    var input = $("#keyword").val();
    var reg = new RegExp("^" + input);

    $(".list").remove();

    $.each(fruits, function(i, fruit) {
      if (fruit.match(reg)) {
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした");
    }
  });
});



// $(function() {
//   $("#submit").on("click", function() {
//     var input = $("#keyword").val();
//     $.each(fruits, function(i, fruit) {
//       if (input === fruit) {
//         $("#result").text(input);
//         return false;
//       } else {
//         $("#result").text("一致する果物はありませんでした。");
//       }
//     });
//   });
// });


// $(function() {
//   $("#submit").on("click", function() {
//     var input = $("#keyword").val();
//     $("#result").text(input);
//   });
// });
