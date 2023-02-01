export interface FloggingData {
  date: string;
  location: string; // 문자열
  distance: number; // 소숫점 둘째 자리까지 이상의
  duration: string; // HH:MM:SS 형식의 문자열
  photo: FormData; // 파일명과 확장자 -> 플로깅 인증 사진
}
