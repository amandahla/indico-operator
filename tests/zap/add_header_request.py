headers = dict({"Host": "indico.local"});

def sendingRequest(msg, initiator, helper): 
    for x in list(headers):
      print(msg.getRequestHeader());
      msg.getRequestHeader().setHeader(x, headers[x]);
      print(msg.getRequestHeader());


def responseReceived(msg, initiator, helper): 
    pass;  
