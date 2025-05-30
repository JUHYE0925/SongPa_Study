  package com.ohgiraffers.publisher.model.dto;

   public class AuthorAndEmployeeDTOJA {
       private int authorId;
      private String authorName;
      private Boolean awarded;
      private String empName;

       public AuthorAndEmployeeDTOJA(){}

        public AuthorAndEmployeeDTOJA(int authorId, String authorName, Boolean awarded, String empName) {
            this.authorId = authorId;
            this.authorName = authorName;
            this.awarded = awarded;
            this.empName = empName;
        }

        public int getAuthorId() {
            return authorId;
        }

        public void setAuthorId(int authorId) {
            this.authorId = authorId;
        }

        public String getAuthorName() {
            return authorName;
        }

        public void setAuthorName(String authorName) {
            this.authorName = authorName;
        }

        public Boolean getAwarded() {
            return awarded;
        }

        public void setAwarded(Boolean awarded) {
            this.awarded = awarded;
        }

        public String getEmpName() {
            return empName;
        }

        public void setEmpName(String empName) {
            this.empName = empName;
        }

        @Override
        public String toString() {
            return "AuthorAndEmployeeDTO{" +
                    "authorId=" + authorId +
                    ", authorName='" + authorName + '\'' +
                    ", awarded=" + awarded +
                    ", empName='" + empName + '\'' +
                    '}';
        }
    }