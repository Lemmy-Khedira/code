#include <stdio.h>
struct mark
{
    char mat[8];
    char ccode[7];
    int semester;
    int acadYear;
    float CAmark;
    float Exmark;
};
// Function to compute final score
float get_finalScore(struct Mark *m)
{
    return (0.4 * m->CAmark) + (0.6 * m->Exmark);
}
char grade(float mark)
{
    if (mark >= 80)
        return 'A';
    else if (mark >= 70)
        return 'B';
    else if (mark >= 60)
        return 'c';
    else if (mark >= 50)
        return 'D';
    else if (mark >= 40)
        return 'E';
    else
        return 'F';
}
int main()
{
    struct Mark student;

    printf("Enter student matricule: ");
    scanf("%7s", student.mat);

    printf("Enter course code: ");
    scanf("%6s", student.ccode);

    printf("Enter semester number: ");
    scanf("%d", &student.semester);

    printf("Enter academic year(e.g. 2025): ");
    scanf("%d", &student.acadYear);

    printf("Enter Continuous Assessment mark (CA): ");
    scanf("%f", &student.CAmark);

    printf("Enter Exam mark: ");
    scanf("%f", &student.Exmark);

    // calculate final score and grade
    float final = get_finalScore(&student);
    char g = grade(final);

    // Display results
    printf("\n--- STUDENT RESULT ---\n");
    printf("Matricule: %s\n", student.mat);
    printf("Course Code: %s\n", student.code);
    printf("Semester: %d\n", student.semester);
    printf("Academic Year: %d\n", student.acadYear);
    printf("CA Mark: %.2f\n", student.CAmark);
    printf("Exam Mark: %.2f\n", student.Exmark);
    printf("Final Score: %.2f\n", final);
    printf("Grade: %c\n", g);

    return 0;
