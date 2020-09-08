const express = require('express');
const router = express();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT || 8000;
router.set('port', port);

router.listen(port, () => console.info('Mailer runs on port ' + `${port}`));

router.set('view engine', 'ejs');
router.use(express.static('static'));

require('./server')(router);

/* 
<form role="form" action="host" method="POST">
<label for="to">To
<input type="text" class="form-control" id="to" name="to" placeholder="Receiver Email" required>
</label><br><br>

<label for="subject">Subject
<input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" required>
</label><br><br>

<label for="message">Message     
<textarea class="form-control" id="message" name="message" placeholder="Message" required></textarea>
</label<br><br>

<button type="submit" id="submit" name="submit">Send</button>
</form>
*/
