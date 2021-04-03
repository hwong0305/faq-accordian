const accordians = document.getElementById('accordians');

// Function to create Accordians
function createAccordian(header, body) {
  const div = document.createElement('div');

  div.className = 'accordian collapse';
  const h2 = document.createElement('h2');
  h2.className = 'accordian-header';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'accordian-button';
  button.innerText = header;

  div.appendChild(h2);
  h2.appendChild(button);

  const icon = document.createElement('i');
  icon.className = 'fas fa-caret-up';
  h2.appendChild(icon);

  const p = document.createElement('p');
  p.className = 'accordian-body';
  p.innerText = body;

  button.addEventListener('click', () => {
    h2.classList.toggle('active');
    icon.className =
      icon.className === 'fas fa-caret-up'
        ? 'fas fa-caret-down'
        : 'fas fa-caret-up';
    if (div.classList.contains('collapse')) {
      requestAnimationFrame(() => {
        p.style.height = p.scrollHeight * 1.5 + 'px';
      });
    } else {
      requestAnimationFrame(() => {
        p.style = null;
      });
    }
    requestAnimationFrame(() => {
      div.classList.toggle('collapse');
    });
  });

  div.appendChild(p);
  accordians.appendChild(div);
}

createAccordian(
  'How many team members can I invite?',
  'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
);
createAccordian(
  'What is the maximum file upload size?',
  'No more than 2GB. All files in your account must fit your allotted storage space.'
);
createAccordian(
  'How do I reset my password?',
  `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`
);
createAccordian(
  'Can I cancel my subscription?',
  'Yes! Send us a message and we’ll process your request no questions asked'
);
createAccordian(
  'Do you provide additional support?',
  'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
);
