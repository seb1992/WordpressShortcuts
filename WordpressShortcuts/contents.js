chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    if (request.greeting == "bold")
    {
      $("#qt_content_strong").click();
    }
    else if (request.greeting == "italic")
    {
      $("#qt_content_em").click();
    }
    else if (request.greeting == "link")
    {
      $("#qt_content_link").click();
    }
    else if (request.greeting == "block")
    {
      $("#qt_content_block").click();
    }
    else if (request.greeting == "del")
    {
      $("#qt_content_del").click();
    }
    else if (request.greeting == "ins")
    {
      $("#qt_content_ins").click();
    }
    else if (request.greeting == "img")
    {
      $("#qt_content_img").click();
    }
    else if (request.greeting == "ul")
    {
      $("#qt_content_ul").click();
    }
    else if (request.greeting == "ol")
    {
      $("#qt_content_ol").click();
    }
    else if (request.greeting == "li")
    {
      $("#qt_content_li").click();
    }
    else if (request.greeting == "code")
    {
      $("#qt_content_code").click();
    }
    else if (request.greeting == "more")
    {
      $("#qt_content_more").click();
    }
    else if (request.greeting == "close")
    {
      $("#qt_content_close").click();
    }
    else if (request.greeting == "q")
    {
      $("#qt_content_q").click();
    }
    else if (request.greeting == "h2")
    {
      $("#qt_content_h2").click();
    }
    else if (request.greeting == "h3")
    {
      $("#qt_content_h3").click();
    }
    else if (request.greeting == "h4")
    {
      $("#qt_content_h4").click();
    }
    else if (request.greeting == "toc")
    {
      $("#qt_content_toc").click();
    }

    sendResponse({farewell: "goodbye"});
});
