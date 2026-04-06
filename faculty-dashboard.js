/* =================================================================
   faculty-dashboard.js
   Works alongside the inline <script> in faculty-dashboard.html.
   Handles: student data per faculty, View / Attendance / Academics
   modals, Search, and injects extra modals into the page.
================================================================= */

/* ── 1. FACULTY & STUDENT DATA ── */
const facultyStudentData = {
    'nitin-dhawas': [
        { name:'Sandesh Shingankar',        roll:'70', div:'TE IT-A', contact:'8668916936', email:'sandeshshingankar8@gmail.com',  parent:'Ashok Shingankar' },
        { name:'Khushal Shantaram Warule',  roll:'80', div:'TE IT-A', contact:'7249256930', email:'khushalwarule2005@gmail.com',   parent:'Shantaram Warule' },
        { name:'Vaishnavi A. Kadganchi',    roll:'79', div:'TE IT-A', contact:'7709411329', email:'vaishnavikadganchi@gmail.com',  parent:'Appasaheb Kadganchi' },
        { name:'Tejas B. Naiknaware',       roll:'84', div:'TE IT-A', contact:'8007953205', email:'tezz4568@gmail.com',            parent:'Balasaheb Naiknaware' },
    ],
    'dheeraj-patil': [
        { name:'Sandesh Shingankar',        roll:'70', div:'TE IT-A', contact:'8668916936', email:'sandeshshingankar8@gmail.com',  parent:'Ashok Shingankar' },
        { name:'Khushal Shantaram Warule',  roll:'80', div:'TE IT-A', contact:'7249256930', email:'khushalwarule2005@gmail.com',   parent:'Shantaram Warule' },
        { name:'Vaishnavi A. Kadganchi',    roll:'79', div:'TE IT-A', contact:'7709411329', email:'vaishnavikadganchi@gmail.com',  parent:'Appasaheb Kadganchi' },
        { name:'Tejas B. Naiknaware',       roll:'84', div:'TE IT-A', contact:'8007953205', email:'tezz4568@gmail.com',            parent:'Balasaheb Naiknaware' },
    ],
    'nitin-wankhade': [
        { name:'Sandesh Shingankar',        roll:'70', div:'TE IT-A', contact:'8668916936', email:'sandeshshingankar8@gmail.com',  parent:'Ashok Shingankar' },
        { name:'Khushal Shantaram Warule',  roll:'80', div:'TE IT-A', contact:'7249256930', email:'khushalwarule2005@gmail.com',   parent:'Shantaram Warule' },
        { name:'Vaishnavi A. Kadganchi',    roll:'79', div:'TE IT-A', contact:'7709411329', email:'vaishnavikadganchi@gmail.com',  parent:'Appasaheb Kadganchi' },
        { name:'Tejas B. Naiknaware',       roll:'84', div:'TE IT-A', contact:'8007953205', email:'tezz4568@gmail.com',            parent:'Balasaheb Naiknaware' },
    ],
    'roshni-narkhede': [
        { name:'Sandesh Shingankar',        roll:'70', div:'TE IT-A', contact:'8668916936', email:'sandeshshingankar8@gmail.com',  parent:'Ashok Shingankar' },
        { name:'Khushal Shantaram Warule',  roll:'80', div:'TE IT-A', contact:'7249256930', email:'khushalwarule2005@gmail.com',   parent:'Shantaram Warule' },
        { name:'Vaishnavi A. Kadganchi',    roll:'79', div:'TE IT-A', contact:'7709411329', email:'vaishnavikadganchi@gmail.com',  parent:'Appasaheb Kadganchi' },
        { name:'Tejas B. Naiknaware',       roll:'84', div:'TE IT-A', contact:'8007953205', email:'tezz4568@gmail.com',            parent:'Balasaheb Naiknaware' },
    ],
    'sonali-dongare': [
        { name:'Sandesh Shingankar',        roll:'70', div:'TE IT-A', contact:'8668916936', email:'sandeshshingankar8@gmail.com',  parent:'Ashok Shingankar' },
        { name:'Khushal Shantaram Warule',  roll:'80', div:'TE IT-A', contact:'7249256930', email:'khushalwarule2005@gmail.com',   parent:'Shantaram Warule' },
        { name:'Vaishnavi A. Kadganchi',    roll:'79', div:'TE IT-A', contact:'7709411329', email:'vaishnavikadganchi@gmail.com',  parent:'Appasaheb Kadganchi' },
    ],
    'vivek-nagargoje': [
        { name:'Sandesh Shingankar',        roll:'70', div:'TE IT-A', contact:'8668916936', email:'sandeshshingankar8@gmail.com',  parent:'Ashok Shingankar' },
        { name:'Khushal Shantaram Warule',  roll:'80', div:'TE IT-A', contact:'7249256930', email:'khushalwarule2005@gmail.com',   parent:'Shantaram Warule' },
        { name:'Vaishnavi A. Kadganchi',    roll:'79', div:'TE IT-A', contact:'7709411329', email:'vaishnavikadganchi@gmail.com',  parent:'Appasaheb Kadganchi' },
    ],
    'vanita-deshmukh': [
        { name:'Sandesh Shingankar',        roll:'70', div:'TE IT-A', contact:'8668916936', email:'sandeshshingankar8@gmail.com',  parent:'Ashok Shingankar' },
        { name:'Khushal Shantaram Warule',  roll:'80', div:'TE IT-A', contact:'7249256930', email:'khushalwarule2005@gmail.com',   parent:'Shantaram Warule' },
        { name:'Vaishnavi A. Kadganchi',    roll:'79', div:'TE IT-A', contact:'7709411329', email:'vaishnavikadganchi@gmail.com',  parent:'Appasaheb Kadganchi' },
        { name:'Tejas B. Naiknaware',       roll:'84', div:'TE IT-A', contact:'8007953205', email:'tezz4568@gmail.com',            parent:'Balasaheb Naiknaware' },
    ],
    'hemlata-mane': [
        { name:'Sandesh Shingankar',        roll:'70', div:'TE IT-A', contact:'8668916936', email:'sandeshshingankar8@gmail.com',  parent:'Ashok Shingankar' },
        { name:'Khushal Shantaram Warule',  roll:'80', div:'TE IT-A', contact:'7249256930', email:'khushalwarule2005@gmail.com',   parent:'Shantaram Warule' },
        { name:'Vaishnavi A. Kadganchi',    roll:'79', div:'TE IT-A', contact:'7709411329', email:'vaishnavikadganchi@gmail.com',  parent:'Appasaheb Kadganchi' },
        { name:'Tejas B. Naiknaware',       roll:'84', div:'TE IT-A', contact:'8007953205', email:'tezz4568@gmail.com',            parent:'Balasaheb Naiknaware' },
    ],
    'bharti-dhote': [
        { name:'Sandesh Shingankar',        roll:'70', div:'TE IT-A', contact:'8668916936', email:'sandeshshingankar8@gmail.com',  parent:'Ashok Shingankar' },
        { name:'Khushal Shantaram Warule',  roll:'80', div:'TE IT-A', contact:'7249256930', email:'khushalwarule2005@gmail.com',   parent:'Shantaram Warule' },
        { name:'Vaishnavi A. Kadganchi',    roll:'79', div:'TE IT-A', contact:'7709411329', email:'vaishnavikadganchi@gmail.com',  parent:'Appasaheb Kadganchi' },
        { name:'Tejas B. Naiknaware',       roll:'84', div:'TE IT-A', contact:'8007953205', email:'tezz4568@gmail.com',            parent:'Balasaheb Naiknaware' },
    ],
    'ajay-sonawane': [
        { name:'Sandesh Shingankar',        roll:'70', div:'TE IT-A', contact:'8668916936', email:'sandeshshingankar8@gmail.com',  parent:'Ashok Shingankar' },
        { name:'Khushal Shantaram Warule',  roll:'80', div:'TE IT-A', contact:'7249256930', email:'khushalwarule2005@gmail.com',   parent:'Shantaram Warule' },
        { name:'Vaishnavi A. Kadganchi',    roll:'79', div:'TE IT-A', contact:'7709411329', email:'vaishnavikadganchi@gmail.com',  parent:'Appasaheb Kadganchi' },
        { name:'Tejas B. Naiknaware',       roll:'84', div:'TE IT-A', contact:'8007953205', email:'tezz4568@gmail.com',            parent:'Balasaheb Naiknaware' },
    ],
};

const facultyProfiles = {
    'nitin-dhawas':    { name:'Dr. Nitin Dhawas',      title:'Professor',            email:'nitin.dhawas@nmiet.edu.in',    photo:'https://www.nmiet.edu.in/wp-content/uploads/2025/04/dr-nitin-dhawas.png',              qual:'PhD (Electronics & Communication)', qualExtra:'ME (IT)', expTotal:'27', expTeach:'27', expertise:'Wireless Communication, Mobile Computing, Cloud Computing', research:'Mobile edge computing and IoT.', publications:['Int. Journal - 55 papers','Int. Conference - 14 papers','Copyright & Patent - 15'] },
    'dheeraj-patil':   { name:'Prof. Dheeraj Patil',   title:'Asst. Professor & Academic Coordinator', email:'dheeraj.patil@nmiet.edu.in', photo:'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mr-diraj-patil.png', qual:'ME (Computer Engg)', qualExtra:'BE (Computer Engg)', expTotal:'17', expTeach:'17', expertise:'Computer Networking, Computer Security', research:'Network security and intrusion detection.', publications:['Int. Journal - 8 papers','Int. Conference - 4 papers','Copyright & Patent - 2'] },
    'nitin-wankhade':  { name:'Prof. Nitin Wankhade',  title:'Asst. Professor',      email:'nitin.wankhade@nmiet.edu.in',  photo:'https://www.nmiet.edu.in/wp-content/uploads/2025/04/dr-nitin-wankhande.png',        qual:'PhD (Pursuing), ME (IT)', qualExtra:'BE', expTotal:'18', expTeach:'18', expertise:'Machine Learning, Generative AI', research:'Generative models and language AI.', publications:['Int. Journal - 2 papers','Int. Conference - 6 papers','Copyright & Patent - 2'] },
    'roshni-narkhede': { name:'Prof. Roshni Narkhede', title:'Asst. Professor',      email:'roshni.narkhede@nmiet.edu.in', photo:'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mrs-roshini.png',              qual:'ME (Computer Engg)', qualExtra:'BE', expTotal:'9',  expTeach:'9',  expertise:'Software Testing, Information Security', research:'Automated testing methodologies.', publications:[] },
    'sonali-dongare':  { name:'Prof. Sonali Dongare',  title:'Asst. Professor',      email:'sonali.dongare@nmiet.edu.in',  photo:'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mrs-sonali-dongre.png',         qual:'ME (Computer Engg)', qualExtra:'BE', expTotal:'19', expTeach:'19', expertise:'Programming, DSA, Machine Learning, Web Dev', research:'Machine learning applications in education.', publications:['Int. Journal - 10 papers','Int. Conference - 4 papers','Copyright & Patent - 5 Copyrights, 1 Patent'] },
    'vivek-nagargoje': { name:'Prof. Vivek Nagargoje', title:'Asst. Professor',      email:'vivek.nagargoje@nmiet.edu.in', photo:'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mr-niraj.png',                 qual:'PhD (Pursuing), ME (IT)', qualExtra:'BE', expTotal:'17', expTeach:'17', expertise:'Cloud Computing', research:'Cloud resource scheduling.', publications:['Int. Journal - 4 papers','Int. Conference - 1 paper','Copyright & Patent - 1 Copyright, 2 Patents'] },
    'vanita-deshmukh': { name:'Prof. Vanita Deshmukh', title:'Asst. Professor',      email:'vanita.deshmukh@nmiet.edu.in', photo:'https://www.nmiet.edu.in/wp-content/uploads/2025/11/prof-sunita-deskmukha.png',   qual:'ME (E&C)', qualExtra:'BE', expTotal:'3',  expTeach:'3',  expertise:'Data Communication', research:'Signal processing.', publications:[] },
    'hemlata-mane':    { name:'Prof. Hemlata Mane',    title:'Asst. Professor',      email:'hemlata.mane@nmiet.edu.in',    photo:'https://www.nmiet.edu.in/wp-content/uploads/2025/04/hemlata-mane.png',             qual:'ME (Computer Engg)', qualExtra:'BE (IT)', expTotal:'5', expTeach:'5', expertise:'Software Testing, Information Security, Web Dev', research:'Web security and usability.', publications:['Int. Journal - 10 papers','Int. Conference - 4 papers','Copyright & Patent - 5 Copyrights, 1 Patent'] },
    'bharti-dhote':    { name:'Prof. Bharti Dhote',    title:'Asst. Professor',      email:'bharti.dhote@nmiet.edu.in',    photo:'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mrs-bharti.png',              qual:'PhD (Pursuing), ME (Computer Engg)', qualExtra:'BE', expTotal:'19', expTeach:'19', expertise:'Data Structure, Theory of Computation', research:'Automata theory applications.', publications:['Int. Journal - 4 papers','Int. Conference - 1 paper','Copyright & Patent - 1'] },
    'ajay-sonawane':   { name:'Prof. Ajay Sonawane',   title:'Asst. Professor',      email:'ajay.sonawane@nmiet.edu.in',   photo:'https://www.nmiet.edu.in/wp-content/uploads/2025/11/prof-ajay-tukaram-sonawane.png', qual:'PhD (Pursuing), MTech (CSE)', qualExtra:'BE', expTotal:'7', expTeach:'7', expertise:'Machine Learning, Deep Learning, Data Science', research:'Deep learning for medical imaging.', publications:['Int. Journal - 8 papers','Int. Conference - 4 papers','Copyright & Patent - 1 Copyright, 1 Patent'] },
};

/* ═══════════════════════════════════════════════════════════
   ATTENDANCE  — stored per student roll in localStorage
═══════════════════════════════════════════════════════════ */
function attKey(roll)   { return `att_${roll}`; }
function loadAtt(roll)  {
    try { return JSON.parse(localStorage.getItem(attKey(roll))) || { total:0, present:0 }; }
    catch(e) { return { total:0, present:0 }; }
}
function saveAtt(roll, data) { localStorage.setItem(attKey(roll), JSON.stringify(data)); }

/* ═══════════════════════════════════════════════════════════
   MARKS  — stored per student roll in localStorage
═══════════════════════════════════════════════════════════ */
function marksKey(roll)  { return `marks_${roll}`; }
function loadMarks(roll) {
    try { return JSON.parse(localStorage.getItem(marksKey(roll))) || []; }
    catch(e) { return []; }
}
function saveMarks(roll, data) { localStorage.setItem(marksKey(roll), JSON.stringify(data)); }

/* ═══════════════════════════════════════════════════════════
   INJECT EXTRA MODALS (View / Attendance / Academics)
   These are not in the HTML, so we add them dynamically.
═══════════════════════════════════════════════════════════ */
function injectModals() {
    document.body.insertAdjacentHTML('beforeend', `

    <!-- ── VIEW STUDENT MODAL ── -->
    <div class="fd-overlay" id="viewModal" onclick="closeModal('viewModal')">
      <div class="fd-modal narrow" onclick="event.stopPropagation()">
        <div class="fd-mhead">
            <h3><i class="fas fa-user-circle"></i> Student Details</h3>
            <button class="fd-mclose" onclick="closeModal('viewModal')">&#x2715;</button>
        </div>
        <div class="fd-mbody" id="viewModalBody"></div>
        <div class="fd-mfoot">
            <button class="fd-btn-cancel" onclick="closeModal('viewModal')">Close</button>
        </div>
      </div>
    </div>

    <!-- ── ATTENDANCE MODAL ── -->
    <div class="fd-overlay" id="attModal" onclick="closeModal('attModal')">
      <div class="fd-modal narrow" onclick="event.stopPropagation()">
        <div class="fd-mhead">
            <h3><i class="fas fa-clipboard-list"></i> Attendance &mdash; <span id="attStudentName"></span></h3>
            <button class="fd-mclose" onclick="closeModal('attModal')">&#x2715;</button>
        </div>
        <div class="fd-mbody">
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px;">
                <div style="background:#d1fae5;border-radius:12px;padding:16px;text-align:center;">
                    <div style="font-size:11px;font-weight:700;color:#065f46;text-transform:uppercase;margin-bottom:4px;">Present</div>
                    <div id="attPresent" style="font-size:28px;font-weight:800;color:#059669;">0</div>
                </div>
                <div style="background:#fee2e2;border-radius:12px;padding:16px;text-align:center;">
                    <div style="font-size:11px;font-weight:700;color:#991b1b;text-transform:uppercase;margin-bottom:4px;">Absent</div>
                    <div id="attAbsent"  style="font-size:28px;font-weight:800;color:#dc2626;">0</div>
                </div>
                <div style="background:#dbeafe;border-radius:12px;padding:16px;text-align:center;">
                    <div style="font-size:11px;font-weight:700;color:#1e40af;text-transform:uppercase;margin-bottom:4px;">Percentage</div>
                    <div id="attPercent" style="font-size:28px;font-weight:800;color:#2563eb;">--</div>
                </div>
            </div>
            <div style="display:flex;gap:12px;margin-bottom:18px;">
                <button onclick="markAtt('present')"
                    style="flex:1;padding:13px;background:linear-gradient(135deg,#059669,#047857);
                           color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;">
                    &#x2705; Mark Present
                </button>
                <button onclick="markAtt('absent')"
                    style="flex:1;padding:13px;background:linear-gradient(135deg,#dc2626,#b91c1c);
                           color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;">
                    &#x274C; Mark Absent
                </button>
            </div>
            <div id="attWarning" style="display:none;background:#fef3c7;border-left:4px solid #f59e0b;
                 padding:12px 14px;border-radius:8px;font-size:13px;color:#92400e;font-weight:600;"></div>
        </div>
        <div class="fd-mfoot">
            <button class="fd-btn-cancel" onclick="closeModal('attModal')">Close</button>
        </div>
      </div>
    </div>

    <!-- ── ACADEMICS MODAL ── -->
    <div class="fd-overlay" id="acadModal" onclick="closeModal('acadModal')">
      <div class="fd-modal" onclick="event.stopPropagation()">
        <div class="fd-mhead">
            <h3><i class="fas fa-chart-bar"></i> Academics &mdash; <span id="acadStudentName"></span></h3>
            <button class="fd-mclose" onclick="closeModal('acadModal')">&#x2715;</button>
        </div>
        <div class="fd-mbody">
            <div class="fd-stitle">Add / Update Marks</div>
            <div class="fd-row" style="margin-bottom:10px;">
                <div class="fd-fg">
                    <label><i class="fas fa-book"></i> Subject</label>
                    <input type="text" id="acadSubject" placeholder="e.g. Data Structures">
                </div>
                <div class="fd-fg">
                    <label><i class="fas fa-star"></i> Marks (out of 100)</label>
                    <input type="number" id="acadMarks" placeholder="e.g. 78" min="0" max="100">
                </div>
            </div>
            <div class="fd-row" style="margin-bottom:16px;">
                <div class="fd-fg">
                    <label><i class="fas fa-graduation-cap"></i> Grade</label>
                    <select id="acadGrade">
                        <option value="">-- Select Grade --</option>
                        <option>O (Outstanding)</option>
                        <option>A+ (Excellent)</option>
                        <option>A (Very Good)</option>
                        <option>B+ (Good)</option>
                        <option>B (Above Average)</option>
                        <option>C (Average)</option>
                        <option>D (Pass)</option>
                        <option>F (Fail)</option>
                    </select>
                </div>
                <div class="fd-fg" style="justify-content:flex-end;">
                    <button onclick="addAcadMarks()"
                        style="padding:11px 20px;background:linear-gradient(135deg,#2563eb,#1d4ed8);
                               color:#fff;border:none;border-radius:9px;font-weight:700;cursor:pointer;
                               font-size:14px;align-self:flex-end;display:flex;align-items:center;gap:6px;">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
            <div class="fd-stitle">Marks Record</div>
            <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;font-size:13px;">
                    <thead>
                        <tr style="background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;">
                            <th style="padding:10px 14px;text-align:left;border-radius:8px 0 0 0;">Subject</th>
                            <th style="padding:10px 14px;text-align:center;">Marks</th>
                            <th style="padding:10px 14px;text-align:center;">Grade</th>
                            <th style="padding:10px 14px;text-align:center;border-radius:0 8px 0 0;">Action</th>
                        </tr>
                    </thead>
                    <tbody id="acadTableBody"></tbody>
                </table>
            </div>
            <div id="acadEmpty" style="text-align:center;color:#9ca3af;font-size:14px;padding:20px 0;"></div>
        </div>
        <div class="fd-mfoot">
            <button class="fd-btn-cancel" onclick="closeModal('acadModal')">Close</button>
        </div>
      </div>
    </div>

    `);
}

/* ═══════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════ */
let _currentFacultyKey = '';
let _allStudents       = [];
let _attRoll           = '';
let _acadRoll          = '';

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject the 3 extra modals
    injectModals();

    // 2. Read which faculty from URL
    const params = new URLSearchParams(window.location.search);
    _currentFacultyKey = params.get('faculty') || 'nitin-dhawas';

    // 3. Seed faculty profile data into localStorage (only if not already customised)
    const profile = facultyProfiles[_currentFacultyKey];
    if (profile && !localStorage.getItem('faculty_profile_v1')) {
        localStorage.setItem('faculty_profile_v1', JSON.stringify(profile));
    }

    // 4. Load students & expose to inline script
    _allStudents = facultyStudentData[_currentFacultyKey] || [];
    window.STUDENTS = _allStudents;

    // 5. Render students table now
    renderStudentRows(_allStudents);

    // 6. Wire up search
    setupSearch();

    // 7. Escape key closes all modals
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            ['viewModal','attModal','acadModal'].forEach(id => closeModal(id));
        }
    });
});

/* ═══════════════════════════════════════════════════════════
   SEARCH
═══════════════════════════════════════════════════════════ */
function setupSearch() {
    const inp = document.getElementById('search-input');
    const btn = document.querySelector('.search-btn');
    if (!inp) return;

    const doSearch = () => {
        const q = inp.value.trim().toLowerCase();
        const filtered = q
            ? _allStudents.filter(s =>
                s.name.toLowerCase().includes(q) ||
                s.roll.toString().includes(q)    ||
                s.email.toLowerCase().includes(q))
            : _allStudents;
        renderStudentRows(filtered);
    };

    inp.addEventListener('input', doSearch);
    btn && btn.addEventListener('click', doSearch);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
}

/* ═══════════════════════════════════════════════════════════
   RENDER STUDENT TABLE
   (also exposed as window.renderStudents so inline script
    initStudents() can call it too)
═══════════════════════════════════════════════════════════ */
window.renderStudents  = function(list) { renderStudentRows(list); };
window.initStudents    = function() {
    if (window.STUDENTS) _allStudents = window.STUDENTS;
    renderStudentRows(_allStudents);
};

function renderStudentRows(list) {
    const tbody = document.getElementById('students-tbody');
    const noRes = document.getElementById('no-results');
    if (!tbody) return;

    if (!list || !list.length) {
        tbody.innerHTML = '';
        if (noRes) noRes.style.display = 'block';
        return;
    }
    if (noRes) noRes.style.display = 'none';

    tbody.innerHTML = list.map((s) => {
        const idx = _allStudents.indexOf(s);
        return `
        <tr>
            <td><strong>${s.name}</strong></td>
            <td>${s.roll}</td>
            <td>${s.div}</td>
            <td>${s.contact}</td>
            <td>${s.email}</td>
            <td>
                <div style="display:flex;gap:6px;flex-wrap:wrap;padding:4px 0;">
                    <button class="tbl-btn view"
                            onclick="openViewModal(${idx})" title="View student details">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="tbl-btn msg-s"
                            onclick="openMsgModal('student','${s.email}','${s.name}')" title="Message Student">
                        <i class="fas fa-envelope"></i> Msg Student
                    </button>
                    <button class="tbl-btn msg-p"
                            onclick="openMsgModal('parent','parent_${s.roll}@nmiet.edu.in','${s.parent || 'Parent of '+s.name}')" title="Message Parent">
                        <i class="fas fa-user-friends"></i> Msg Parent
                    </button>
                    <button class="tbl-btn"
                            style="background:#f3e8ff;color:#6b21a8;"
                            onclick="openAttModal(${idx})" title="Manage attendance">
                        <i class="fas fa-clipboard-list"></i> Attendance
                    </button>
                    <button class="tbl-btn"
                            style="background:#fef3c7;color:#92400e;"
                            onclick="openAcadModal(${idx})" title="View academics">
                        <i class="fas fa-chart-bar"></i> Academics
                    </button>
                </div>
            </td>
        </tr>`;
    }).join('');
}

/* ═══════════════════════════════════════════════════════════
   VIEW STUDENT — redirects to student.html with URL params
   student.html already reads these params and populates the
   profile card automatically.
═══════════════════════════════════════════════════════════ */
window.openViewModal = function(idx) {
    const s = _allStudents[idx];
    if (!s) return;

    const params = new URLSearchParams({
        name:    s.name,
        roll:    s.roll,
        div:     s.div,
        contact: s.contact,
        email:   s.email,
        parent:  s.parent || ''
    });

    window.location.href = 'student.html?' + params.toString();
};

/* ═══════════════════════════════════════════════════════════
   ATTENDANCE MODAL
═══════════════════════════════════════════════════════════ */
window.openAttModal = function(idx) {
    const s = _allStudents[idx];
    if (!s) return;
    _attRoll = s.roll;
    document.getElementById('attStudentName').textContent = s.name;
    refreshAttUI();
    openModal('attModal');
};

function refreshAttUI() {
    const att    = loadAtt(_attRoll);
    const absent = att.total - att.present;
    const pct    = att.total ? Math.round((att.present / att.total) * 100) : null;

    document.getElementById('attPresent').textContent = att.present;
    document.getElementById('attAbsent').textContent  = absent;
    document.getElementById('attPercent').textContent = pct !== null ? pct + '%' : '--';

    const warn = document.getElementById('attWarning');
    if (pct !== null && pct < 75) {
        warn.style.display = 'block';
        warn.textContent   = '\u26A0\uFE0F Attendance is ' + pct + '% — below the 75% required threshold!';
    } else {
        warn.style.display = 'none';
    }
}

window.markAtt = function(type) {
    const att = loadAtt(_attRoll);
    att.total++;
    if (type === 'present') att.present++;
    saveAtt(_attRoll, att);
    refreshAttUI();
    if (typeof showToast === 'function') showToast('Marked ' + type + ' for today!');
};

/* ═══════════════════════════════════════════════════════════
   ACADEMICS MODAL
═══════════════════════════════════════════════════════════ */
window.openAcadModal = function(idx) {
    const s = _allStudents[idx];
    if (!s) return;
    _acadRoll = s.roll;
    document.getElementById('acadStudentName').textContent = s.name;
    // clear add-form
    document.getElementById('acadSubject').value = '';
    document.getElementById('acadMarks').value   = '';
    document.getElementById('acadGrade').value   = '';
    renderMarksTable();
    openModal('acadModal');
};

function renderMarksTable() {
    const marks = loadMarks(_acadRoll);
    const tbody = document.getElementById('acadTableBody');
    const empty = document.getElementById('acadEmpty');

    if (!marks.length) {
        tbody.innerHTML  = '';
        empty.textContent = 'No marks recorded yet. Add subjects above.';
        return;
    }
    empty.textContent = '';
    tbody.innerHTML = marks.map((m, i) => `
        <tr style="border-bottom:1px solid #e5e7eb;background:${i % 2 === 0 ? '#f9fafb' : '#fff'};">
            <td style="padding:10px 14px;font-weight:600;color:#111827;">${m.subject}</td>
            <td style="padding:10px 14px;text-align:center;font-weight:700;color:#2563eb;">${m.marks}</td>
            <td style="padding:10px 14px;text-align:center;">
                <span style="background:#dbeafe;color:#1e40af;padding:3px 11px;
                             border-radius:20px;font-size:12px;font-weight:700;">${m.grade}</span>
            </td>
            <td style="padding:10px 14px;text-align:center;">
                <button onclick="deleteMarksRow(${i})"
                    style="background:#fee2e2;color:#dc2626;border:none;border-radius:7px;
                           padding:6px 12px;cursor:pointer;font-size:12px;font-weight:600;">
                    <i class="fas fa-trash-alt"></i> Delete
                </button>
            </td>
        </tr>`).join('');
}

window.addAcadMarks = function() {
    const subject = document.getElementById('acadSubject').value.trim();
    const marks   = parseInt(document.getElementById('acadMarks').value);
    const grade   = document.getElementById('acadGrade').value;

    if (!subject || isNaN(marks) || !grade) { alert('Please fill in all fields.'); return; }
    if (marks < 0 || marks > 100)           { alert('Marks must be between 0 and 100.'); return; }

    const list = loadMarks(_acadRoll);
    list.push({ subject, marks, grade });
    saveMarks(_acadRoll, list);

    document.getElementById('acadSubject').value = '';
    document.getElementById('acadMarks').value   = '';
    document.getElementById('acadGrade').value   = '';

    renderMarksTable();
    if (typeof showToast === 'function') showToast('Marks saved successfully!');
};

window.deleteMarksRow = function(idx) {
    if (!confirm('Delete this marks entry?')) return;
    const list = loadMarks(_acadRoll);
    list.splice(idx, 1);
    saveMarks(_acadRoll, list);
    renderMarksTable();
};
