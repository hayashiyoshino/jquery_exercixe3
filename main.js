var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

// スペースが入力された時にすべての要素が表示されないようにしよう
$(function() {
  var list = $("#list");
  var preWord;

  function appendList(word) {
    var item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element) {
    var result = "^" + element;
    return result;
  }

  $("#keyword").on("keyup", function() {
    var input = $("#keyword").val();
    var inputs = input.split(" ").filter(function(e) { return e; });
    var newInputs = inputs.map(editElement);
    var word = newInputs.join("|");
    var reg = RegExp(word);
    console.log(word);
    console.log(reg);
    if (word != preWord) {
      $(".list").remove();
      if(input.length !== 0) {
        $.each(fruits, function(i, fruit) {
          if (fruit.match(reg)) {
            appendList(fruit);
          }
        });
        if ($(".list").length === 0) {
          appendList("一致する果物はありませんでした");
        }
      }
    }
    preWord = word;
  });
});




// 入力された値が削除されてなくなった時に要素が表示されないようにしよう
// $(function() {
//   var list = $("#list");
//   var preWord;

//   function appendList(word) {
//     var item = $('<li class="list">').append(word);
//     list.append(item);
//   }

//   function editElement(element) {
//     var result = "^" + element;
//     return result;
//   }

//   $("#keyword").on("keyup", function() {
//     var input = $("#keyword").val();
//     var inputs = input.split(" ");
//     var newInputs = inputs.map(editElement);
//     var word = newInputs.join("|");
//     var reg = RegExp(word);

//     $(".list").remove();
//     if (word != preWord && input.length !== 0) {
//       $.each(fruits, function(i, fruit) {
//         if (fruit.match(reg)) {
//           appendList(fruit);
//         }
//       });

//       if ($(".list").length === 0) {
//         appendList("一致する果物はありませんでした");
//       }
//     }
//     preWord = word;
//   });
// });




// 文字を入力しないキーを押した時は処理を実行しないようにしよう
// $(function() {
//   var list = $("#list");
//   var preWord;

//   function appendList(word) {
//     var item = $('<li class="list">').append(word);
//     list.append(item);
//   }

//   function editElement(element) {
//     var result = "^" + element;
//     return result;
//   }

//   $("#keyword").on("keyup", function() {
//     var input = $("#keyword").val();
//     var inputs = input.split(" ");
//     var newInputs = inputs.map(editElement);
//     var word = newInputs.join("|");
//     var reg = RegExp(word);
//     console.log(reg)
//     console.log(input)

//     $(".list").remove();
//     if (word != preWord) {
//       $.each(fruits, function(i, fruit) {
//         if (fruit.match(reg)) {
//           appendList(fruit);
//         }
//       });

//       if ($(".list").length === 0) {
//         appendList("一致する果物はありませんでした");
//       }
//     }
//     preWord = word;
//   });
// });




// インクリメンタルサーチで検索しましょう
// $(function() {
//   var list = $("#list");

//   function appendList(word) {
//     var item = $('<li class="list">').append(word);
//     list.append(item);
//   }

//   function editElement(element) {
//     var result = "^" + element;
//     return result;
//   }

//   $("#keyword").on("keyup", function() {
//     var input = $("#keyword").val();
//     var inputs = input.split(" ");
//     var newInputs = inputs.map(editElement);
//     var reg = RegExp(newInputs.join("|"));

//     $(".list").remove();

//     $.each(fruits, function(i, fruit) {
//       if (fruit.match(reg)) {
//         appendList(fruit);
//       }
//     });

//     if ($(".list").length === 0) {
//       appendList("一致する果物はありませんでした");
//     }
//   });
// });




// $(function() {
//   var list = $("#list");

//   function appendList(word) {
//     var item = $('<li class="list">').append(word);
//     list.append(item);
//   }

//   function editElement(element) {
//     var result = "^" + element;
//     return result;
//   }

//   $("#submit").on("click", function() {
//     var input = $("#keyword").val();
//     var inputs = input.split(",");
//     var newInputs = inputs.map(editElement);
//     var reg = RegExp(newInputs.join("|"));

//     $(".list").remove();

//     $.each(fruits, function(i, fruit) {
//       if (fruit.match(reg)) {
//         appendList(fruit);
//       }
//     });

//     if ($(".list").length === 0) {
//       appendList("一致する果物はありませんでした");
//     }
//   });
// });



// $(function() {
//   var list = $("#list");

//   function appendList(word) {
//     var item = $('<li class="list">').append(word);
//     テキストが要素名のliタグを生成しitemという変数に代入。
//     liタグにクラスを追加しているのは、２回目以降の検索時に前の検索結果をremove()を使って削除するため。

//     list.append(item);
//   }

//   $("#submit").on("click", function() {
//     var input = $("#keyword").val();
//     var reg = new RegExp("^" + input);
//     入力された値をRegExp()を使って正規表現として使用できるようにしている。
//     ^を使うことで前方一致で検索できるようになる。

//     $(".list").remove();

//     $.each(fruits, function(i, fruit) {
//       if (fruit.match(reg)) {
//         appendList(fruit);
//       }
//     });

//     if ($(".list").length === 0) {
//       appendList("一致する果物はありませんでした");
//       listクラスのliタグが１つも追加されていないときは、入力された値に一致する要素がないことになるので”一致する果物はありませんでした”を引数としてappendListメソッド呼び出している。

//     }
//   });
// });



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
