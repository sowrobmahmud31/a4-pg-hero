let interviewList = [];
  let rejectedList = [];
  let currentStatus = 'all';

  const total = document.getElementById('total');
  const interviewCount = document.getElementById('interviewCount');
  const rejectedCount = document.getElementById('rejectedCount');

  const allFilterBtn = document.getElementById('all-btn');
  const interviewFilterBtn = document.getElementById('interview-btn');
  const rejectedFilterBtn = document.getElementById('rejected-btn');

  const allCardSection = document.getElementById('allCards');

  // Initialize card status
  Array.from(allCardSection.children).forEach(card => card.dataset.status = 'all');

  function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
  }

  // Filter
  function toggleFilter(id) {
    currentStatus = id;

    allFilterBtn.classList.remove('bg-slate-900','text-white');
    interviewFilterBtn.classList.remove('bg-slate-900','text-white');
    rejectedFilterBtn.classList.remove('bg-slate-900','text-white');

    const activeBtn = document.getElementById(id);
    activeBtn.classList.add('bg-slate-900','text-white');

    Array.from(allCardSection.children).forEach(card => {
      if(id==='all-btn') card.style.display='flex';
      else if(id==='interview-btn' && card.dataset.status==='interview') card.style.display='flex';
      else if(id==='rejected-btn' && card.dataset.status==='rejected') card.style.display='flex';
      else card.style.display='none';
    });
  }

  // Filter button events
  allFilterBtn.addEventListener('click', ()=> toggleFilter('all-btn'));
  interviewFilterBtn.addEventListener('click', ()=> toggleFilter('interview-btn'));
  rejectedFilterBtn.addEventListener('click', ()=> toggleFilter('rejected-btn'));

  // Card buttons
  allCardSection.addEventListener('click', (e)=>{
    const card = e.target.closest('.card');
    if(!card) return;
    const title = card.querySelector('p.text-xl').innerText;

    // Interview button
    if(e.target.classList.contains('bg-emerald-500')){
      card.dataset.status='interview';
      if(!interviewList.includes(title)) interviewList.push(title);
      rejectedList = rejectedList.filter(t=>t!==title);
      calculateCount();
      toggleFilter(currentStatus);
    }

    // Rejected button
    if(e.target.classList.contains('bg-rose-100')){
      card.dataset.status='rejected';
      if(!rejectedList.includes(title)) rejectedList.push(title);
      interviewList = interviewList.filter(t=>t!==title);
      calculateCount();
      toggleFilter(currentStatus);
    }

    // Delete button
    if(e.target.innerText==='Delete'){
      interviewList = interviewList.filter(t=>t!==title);
      rejectedList = rejectedList.filter(t=>t!==title);
      card.remove();
      calculateCount();
    }
  });

  calculateCount(); // initial count

