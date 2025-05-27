package com.ohgiraffers.run;

import com.ohgiraffers.controller.PublisherController;
import com.ohgiraffers.model.DepartmentDTO;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Scanner;

public class Application {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        PublisherController publisherController = new PublisherController();

        do{

            System.out.println("=========== 출판사 직원 관리 ===========");
            System.out.println("1. 직원 전체 조회 : ");
            System.out.println("2. 직원 전체 조회(부서명 포함) : ");
            System.out.println("3. 직원 상세 조회 : ");
            System.out.println("4. 신규 직원 등록 : ");
            System.out.println("5. 직원 정보 수정 : ");
            System.out.println("6. 직원 정보 일부/전부 수정 : ");
            System.out.println("7. 직원 정보 삭제 : ");
            System.out.println("직원 관리 번호를 입력하세요 : ");
            int no = sc.nextInt();

            switch(no){
                case 1 : publisherController.selectAllEmp(); break;
                /* association 사용 */
                case 2 : publisherController.selectAllEmpAndDept(); break;
                case 3 : publisherController.selectEmpByEmpId(inputEmpId()); break;
                case 4 : publisherController.insertNewEmp(inputEmpInfo()); break;
                case 5 : publisherController.modifyEmp(inputModifyEmp()); break;
                case 6 : publisherController.modifyEmpAllOrSome(inputModifyAllOrSomeEmp()); break;
                case 7 : publisherController.deleteEmp(inputDeleteEmpId()); break;
                default :
                    System.out.println("잘못된 번호를 입력하였습니다."); break;
            }

        } while(true);

    }

    private static Map<String, String> inputEmpId(){

        Scanner sc = new Scanner(System.in);
        System.out.println("조회할 직원의 사번을 입력해주세요 : ");
        String empId = sc.nextLine();

        Map<String, String> parameter = new HashMap<>();
        parameter.put("empId", empId);

        return parameter;

    }

    private static Map<String, String> inputEmpInfo(){

        Scanner sc = new Scanner(System.in);
        System.out.println("직원의 사번을 입력해주세요 : ");
        String empId = sc.nextLine();
        System.out.println("직원의 이름을 입력해주세요 : ");
        String empName = sc.nextLine();
        System.out.println("직원의 이메일을 입력해주세요 : ");
        String email = sc.nextLine();
        System.out.println("직원의 부서 번호를 입력해주세요 : ");
        String deptCode = sc.nextLine();
        System.out.println("직원의 급여를 입력해주세요 : ");
        String salary = sc.nextLine();
        System.out.println("직원의 입사 일자를 입력해주세요 : ");
        String hireDate = sc.nextLine();

        Map<String, String> parameter = new HashMap<>();
        parameter.put("empId", empId);
        parameter.put("empName", empName);
        parameter.put("email", email);
        parameter.put("salary", salary);
        parameter.put("hireDate", hireDate);
        parameter.put("deptCode", deptCode);

        return parameter;

    }

    private static Map<String, String> inputModifyEmp(){

        Scanner sc = new Scanner(System.in);

        System.out.println("수정할 직원의 사번을 입력해주세요 : ");
        String empId = sc.nextLine();
        System.out.println("수정할 직원의 이름을 입력해주세요 : ");
        String empName = sc.nextLine();
        System.out.println("수정할 직원의 이메일을 입력해주세요 : ");
        String email = sc.nextLine();
        System.out.println("수정할 직원의 부서 번호를 입력해주세요 : ");
        String deptCode = sc.nextLine();
        System.out.println("수정할 직원의 급여를 입력해주세요 : ");
        String salary = sc.nextLine();

        Map<String, String> parameter = new HashMap<>();
        parameter.put("empId", empId);
        parameter.put("empName", empName);
        parameter.put("email", email);
        parameter.put("deptCode", deptCode);
        parameter.put("salary", salary);

        return parameter;

    }

    private static Map<String, String> inputModifyAllOrSomeEmp(){

        Scanner sc = new Scanner(System.in);

        System.out.println("수정할 직원의 사번을 입력해주세요 : ");
        String empId = sc.nextLine();
        System.out.println("수정할 직원의 부서 번호를 입력해주세요 : ");
        String deptCode = sc.nextLine();
        System.out.println("수정할 직원의 급여를 입력해주세요 : ");
        String salary = sc.nextLine();

        Map<String, String> parameter = new HashMap<>();
        parameter.put("empId", empId);
        parameter.put("deptCode", deptCode);
        parameter.put("salary", salary);

        return parameter;

    }



    private static Map<String, String> inputDeleteEmpId(){

        Scanner sc = new Scanner(System.in);
        System.out.println("삭제할 직원의 사번을 입력해주세요 : ");
        String empId = sc.nextLine();

        Map<String, String> parameter = new HashMap<>();
        parameter.put("empId", empId);

        return parameter;

    }
}
