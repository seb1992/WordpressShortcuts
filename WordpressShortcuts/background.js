chrome.commands.onCommand.addListener(function(command)
{
  sendMessage(command);
})

function sendMessage(buttonFunction)
{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
  {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: buttonFunction}, function(response)
    {
      console.log(response.farewell);
    });
  });
}
