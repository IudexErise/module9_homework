// Task 9.1

const parser = new DOMParser();

let answer = {
  list: []
};

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
    
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNode = xmlDOM.querySelectorAll("student");

for (let i = 0; i < studentNode.length; i++) {
  firstNameNode  = studentNode[i].querySelector("first").textContent;
  secondNameNode  = studentNode[i].querySelector("second").textContent;
  profNode  = studentNode[i].querySelector("prof").textContent;
  ageNode = studentNode[i].querySelector('age').textContent;
  langAttr  = studentNode[i].querySelector('name').getAttribute('lang');

let student = {
   name: `${firstNameNode} ${secondNameNode}`,
   age: ageNode,
   prof: profNode,
   lang: langAttr,
}

  answer.list.push(student);  
}

console.log(answer)
 
  