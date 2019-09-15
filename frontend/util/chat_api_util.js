export const fetchChats = () =>
  $.ajax({
    method: 'GET',
    url: "/api/chats"
  });

export const startChat = chat =>
  $.ajax({
    method: "POST",
    url: "/api/chats",
    data: { chat }
  });

export const sendMessage = message =>
  $.ajax({
    method: "POST",
    url: "/api/messages",
    data: { message }
  })
