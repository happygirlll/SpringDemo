package DemoTest.controller;import org.springframework.web.bind.annotation.CrossOrigin;import org.springframework.web.bind.annotation.GetMapping;import org.springframework.web.bind.annotation.RequestMapping;import org.springframework.web.bind.annotation.RestController;@RestController@RequestMapping("/api") // API 기본 경로 설정@CrossOrigin(origins = "http://localhost:3000") // CORS 허용public class HelloController {	@GetMapping("/test")	public String hello() {		return "테스트입니다.";	}}