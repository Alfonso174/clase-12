const http = require('http')
const port = 9000
const url= require('url')
const myUrl = url.parse('https://www.facebook.com/campaign/landing.php?campaign_id=1655435892&extra_1=s%7Cc%7C318726445574%7Ce%7Cfacebook%20%27%7C&placement=&creative=318726445574&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D1655435892%26adgroupid%3D63005051989%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D1t1%26target%3D%26targetid%3Dkwd-360705453827%26loc_physical_ms%3D1010079%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIkpqezKTR4gIVm7fACh2f8wvjEAAYASAAEgKSQfD_BwE')

function responseHandler (request, response) {
    
    response.writeHead(200, {'content-type': 'text/plain'})
    response.write(myUrl.pathname)

    response.end()
}

const server = http.createServer(responseHandler)

server.listen(port)