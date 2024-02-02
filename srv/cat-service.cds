using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on my.Books;
    entity Classes as projection on my.Classes;
    entity Department as projection on my.Department;
    entity Employee as projection on my.Employee;
}
