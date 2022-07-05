var form = this.form
var field_id= "7630"

var job = form.elements.filter( i => field_id == i.key )[0];

PLUCK(job.choices,"value");