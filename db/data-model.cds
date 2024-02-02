namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}

define type nos : Integer;

define type Address {
  Building : String;
  Floor : nos;
}

define entity Classes {
  key ID : nos;
  location :Address;
  emails      : many {
      kind    : String null;
      address : String not null;
    } null; 
}

entity Department   {
    key id: UUID;
    departmentName: String;
    employees: Association to many Employee on employees.departmentID = $self.id;
}

entity Employee   {
    key id: UUID;
    employeeName: String;
    departmentID: String;
    department: Association to Department on department.id = departmentID;
}
