var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm3.staticflickr.com/2535/3823437635_c712decf64.jpg",
        description: "Surrounded by water on all sides and only accessible by private boat or public passenger ferry, Cayo Costa boasts splendid isolation. With 9 miles of deserted beach to roam and explore, you won't have to worry about crowds. The warm gulf water is great for swimming, snorkeling, fishing and kayaking. Each tent site can accommodate up to eight people. Showers, toilets and potable water are centrally located. Visitors must bring food and drink, but the extra work is well worth it. This is wild Florida at its best."
    },
    
    {
        name: "Desert Mesa",
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "Surrounded by water on all sides and only accessible by private boat or public passenger ferry, Cayo Costa boasts splendid isolation. With 9 miles of deserted beach to roam and explore, you won't have to worry about crowds. The warm gulf water is great for swimming, snorkeling, fishing and kayaking. Each tent site can accommodate up to eight people. Showers, toilets and potable water are centrally located. Visitors must bring food and drink, but the extra work is well worth it. This is wild Florida at its best."
    },
    
    {
        name: "Canyon Floor",
        image: "https://farm4.staticflickr.com/3751/9580653400_e1509d6696.jpg",
        description: "Surrounded by water on all sides and only accessible by private boat or public passenger ferry, Cayo Costa boasts splendid isolation. With 9 miles of deserted beach to roam and explore, you won't have to worry about crowds. The warm gulf water is great for swimming, snorkeling, fishing and kayaking. Each tent site can accommodate up to eight people. Showers, toilets and potable water are centrally located. Visitors must bring food and drink, but the extra work is well worth it. This is wild Florida at its best."
    }
    ]
function seedDB(){
  Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds!");
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
        if(err){
             console.log(err);
         } else {
             console.log("added a campground");
             Comment.create(
                 {
                 text: "This place is great, but I wish there was internet",
                 author: "Homer"
             }, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    campground.comments.push();
                    campground.save();
                    console.log("Created new comment");
                }
             });
         }  
      });
     });
    }); 
}

module.exports = seedDB;