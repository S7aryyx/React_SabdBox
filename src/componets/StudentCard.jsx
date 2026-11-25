function StudentCard()
{
    const student = {sname:"Name",surname:"Surname",patronimyc:"Patronimyc",age:100};
    return (
        <div className="StudentCard">
            <h3>Имя: {student.sname}</h3>
            <h3>Фамилия: {student.surname}</h3>
            <h3>Отчетсво: {student.patronimyc}</h3>
            <h3>Возраст: {student.age}</h3>

            <p>Группа : ПВ-521</p>
            <p>Предмет : React</p>
        </div>
    );
}

export default StudentCard;