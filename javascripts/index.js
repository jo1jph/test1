var chatMessages = [{
  name: "ms1",
  msg: "Hey mum",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "19:58"
},
{
  name: "ms2",
  msg: "Hi Paul",
  delay: 1500,
  align: "left",
  showTime: true,
  time: "19:58"
},
{
  name: "ms3",
  msg: "How are you? Does your back still hurt?",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "19:59"
},
{
  name: "ms4",
  msg: "A bit, but i think it's getting better now. I've started taking some new meds for the pain",
  delay: 2500,
  align: "left",
  showTime: true,
  time: "20:02"
},
{
  name: "ms5",
  msg: "Good, I'm glad",
  delay: 2000,
  align: "right",
  showTime: true,
  time: "20:03"
},
{
  name: "ms6",
  msg: "Don't worry",
  delay: 500,
  align: "left",
  showTime: false,
  time: "20:04"
},
{
  name: "ms7",
  msg: "How are the kids?",
  delay: 1500,
  align: "left",
  showTime: false,
  time: "20:04"
},
{
  name: "ms8",
  msg: "Is Via still sick?",
  delay: 4000,
  align: "left",
  showTime: true,
  time: "20:05"
},
{
  name: "ms9",
  msg: "They are doing okay. And no, she's going very well now. Back to school and everything",
  delay: 4500,
  align: "right",
  showTime: true,
  time: "20:05"
},
{
  name: "ms10",
  msg: "I'm glad.",
  delay: 1500,
  align: "left",
  showTime: false,
  time: "20:07"
},
{
  name: "ms11",
  msg: "I know you do not want to ask but can you come during the children's Christmas break? I haven't seen you in so long, you're so far away.",
  delay: 3500,
  align: "left",
  showTime: true,
  time: "20:08"
},
{
  name: "ms12",
  msg: "I know we haven't visited in awhile. I will try to get some time off of work but the kids already have plans. They want to go to Amsterdam.",
  delay: 4000,
  align: "right",
  showTime: true,
  time: "20:11"
},
{
  name: "ms14",
  msg: "No. That's fine, don't worry. You don't have to come, just send pictures so I can see the kids.",
  delay: 3500,
  align: "left",
  showTime: true,
  time: "20:12"
},
{
  name: "ms15",
  msg: "I will",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "20:12"
},
{
  name: "ms16",
  msg: "I have to go. Bye for now.",
  delay: 2000,
  align: "left",
  showTime: true,
  time: "20:15"
}
                   ];
var chatDelay = 0;

function onRowAdded() {
  $('.chat-container').animate({
    scrollTop: $('.chat-container').prop('scrollHeight')
  });
};
// $.each(chatMessages, function(index, obj) {
//   console.log(obj)
//   console.log(index)

//   chatDelay = chatDelay + 4000;
//   chatDelay2 = chatDelay + obj.delay;
//   chatDelay3 = chatDelay2 + 10;
//   scrollDelay = chatDelay;
//   chatTimeString = " ";
//   msgname = "." + obj.name;
//   msginner = ".messageinner-" + obj.name;
//   spinner = ".sp-" + obj.name;
//   if (obj.showTime == true) {
//     chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
//   }
//   $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
//   $(msgname).delay(chatDelay).fadeIn();
//   $(spinner).delay(chatDelay2).hide(1);
//   $(msginner).delay(chatDelay3).fadeIn();
//   setTimeout(onRowAdded, chatDelay);
//   setTimeout(onRowAdded, chatDelay3);
//   chatDelay = chatDelay3;
// });
function next(){
  let obj= chatMessages.shift();

  chatDelay2 = obj.delay  ;
  chatDelay3 = chatDelay2 + 10;
  scrollDelay = chatDelay;
  chatTimeString = " ";
  msgname = "." + obj.name;
  msginner = ".messageinner-" + obj.name;
  spinner = ".sp-" + obj.name;
  if (obj.showTime == true) {
    chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
  }
  $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
  $(msgname).delay(chatDelay).fadeIn();
  $(spinner).delay(chatDelay2).hide(1);
  $(msginner).delay(chatDelay3).fadeIn();


  $('#nextButton').fadeOut();
  $('#nextButton').delay(chatDelay3).fadeIn();


  setTimeout(onRowAdded, chatDelay);
  setTimeout(onRowAdded, chatDelay3);
  if(chatMessages.length<1){
    document.getElementById("nextButton").remove();
  }
}
