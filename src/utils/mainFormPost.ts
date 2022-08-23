import { bookFormWait } from '$anim/bookFormWait';

export const mainFormPost = (
  form: JQuery<HTMLInputElement>,
  endpoint: string,
  data: { [key: string]: string }
) => {
  $.ajax({
    url: endpoint,
    method: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    dataType: 'json',
    beforeSend: function () {
      const waitTimeline = bookFormWait();
      waitTimeline.play();
    },
    success: function () {
      const parent = $(form.parent());
      // Hide the form
      parent.children('form').css('display', 'none');
      // Display the "Done" block
      parent.children('.w-form-done').css('display', 'block');
    },
    error: function () {
      //   console.log('error', data);
      const parent = $(form.parent());
      // Display the "Failed" block
      parent.find('.w-form-fail').css('display', 'block');
    },
  });
};
