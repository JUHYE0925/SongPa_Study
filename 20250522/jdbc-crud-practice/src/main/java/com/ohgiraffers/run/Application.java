package com.ohgiraffers.run;

import com.ohgiraffers.model.dao.EmployeeDAO;
import com.ohgiraffers.model.dto.EmployeeDTO;

import java.sql.Connection;
import java.util.List;
import java.util.Scanner;

import static com.ohgiraffers.common.JDBCTemplate.getConnection;

public class Application {

    public static void main(String[] args) {

        Connection con = getConnection();

        EmployeeDAO employeeDAO = new EmployeeDAO();

        int result = 0;

        while(true){

            Scanner sc = new Scanner(System.in);
            System.out.println("------------ 직원 정보 관리 시스템 ------------");
            System.out.println("1. 직원 전체 조회");
            System.out.println("2. 직원 상세 조회");
            System.out.println("3. 직원 등록");
            System.out.println("4. 직원 정보 수정");
            System.out.println("5. 직원 삭제");
            System.out.println("9. 프로그램 종료");
            System.out.println("--------------------------------------------");
            System.out.println("작업 번호를 입력하세요 : ");

            int no = sc.nextInt();

            switch (no){
                case 1 :
                    List<EmployeeDTO> empList = employeeDAO.selectAllEmp(con);

                    for(EmployeeDTO employee : empList){
                        System.out.println("employee = " + employee);
                    }
                    break;
                case 2 :
                    sc.nextLine();
                    System.out.println("조회할 직원의 사번을 입력해주세요 : ");
                    String empId = sc.nextLine();

                    EmployeeDTO employee = employeeDAO.selectByIdEmp(con, empId);
                    System.out.println("employee = " + employee);
                    break;
                case 3 :
                    sc.nextLine();
                    int maxEmpId = employeeDAO.maxEmpId(con) + 1;
                    System.out.println("등록할 직원의 사번을 입력해주세요 : ");
                    System.out.println("참고로 사번은 " + maxEmpId + "번 이후로만 가능합니다.");
                    String insertEempId = sc.nextLine();
                    System.out.println("등록할 직원의 이름을 입력해주세요 : ");
                    String insertEmpName = sc.nextLine();
                    System.out.println("등록할 직원의 주민등록번호를 입력해주세요 : ");
                    String insertEmpNo = sc.nextLine();
                    System.out.println("등록할 직원의 직급을 입력해주세요 : ");
                    String insertJobCode = sc.nextLine();
                    System.out.println("등록할 직원의 급여등급을 입력해주세요 : ");
                    String insertSalLevel = sc.nextLine();

                    result = employeeDAO.insertEmp(con, insertEempId, insertEmpName, insertEmpNo, insertJobCode, insertSalLevel);

                    if(result > 0 ){
                        System.out.println("직원 등록 성공!");
                    } else {
                        System.out.println("직원 등록 실패!");
                    }
                    break;
                case 4 :
                    sc.nextLine();
                    System.out.println("수정할 직원의 사번을 입력해주세요 : ");
                    String modifyEmpId = sc.nextLine();
                    System.out.println("수정할 직원의 이름을 입력해주세요 : ");
                    String modifyEmpName = sc.nextLine();
                    System.out.println("수정할 직원의 직급을 입력해주세요 : ");
                    String modifyJobCode = sc.nextLine();
                    System.out.println("수정할 직원의 급여등급을 입력해주세요 : ");
                    String modifySalLevel = sc.nextLine();

                    result = employeeDAO.modifyEmp(con, modifyEmpId, modifyEmpName, modifyJobCode, modifySalLevel);

                    if(result > 0 ){
                        System.out.println("직원 정보 수정 성공!");
                    } else {
                        System.out.println("직원 정보 수정 실패!");
                    }
                    break;
                case 5 :
                    sc.nextLine();
                    System.out.println("삭제할 직원의 사번을 입력해주세요 : ");
                    String deleteEmpId = sc.nextLine();

                    result = employeeDAO.deleteEmp(con, deleteEmpId);

                    if(result > 0 ){
                        System.out.println("직원 삭제 성공!");
                    } else {
                        System.out.println("직원 삭제 실패!");
                    }
                    break;
                case 9 :
                    System.out.println("프로그램을 종료합니다.");
                    break;
                default:
                    System.out.println("1번과 5번 중에서 골라주세요 : ");
                    break;
            }
            if(no == 9){
                break;
            }

        }

    }


}
