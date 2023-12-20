function skillsMember(){
    var member = document.getElementById("member").value;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsList = document.getElementById("memberSkillsList");
    var memberSkillsListLi = document.createElement("li");
    memberSkillsListLi.setAttribute("id",member);
    memberSkillsListLi.appendChild(document.createTextNode(member));
    memberSkillsList.appendChild(memberSkillsListLi);
    memberSkills.appendChild(memberSkillsList);
    document.getElementById("member").value = "";
}