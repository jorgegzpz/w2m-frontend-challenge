import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InputUppercaseDirective } from './input-uppercase.directive';

@Component({
  template: '<input appInputUppercase [(ngModel)]="model" />',
})
class TestComponent {
  model = '';
}

describe('InputUppercaseDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [InputUppercaseDirective, FormsModule]
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new InputUppercaseDirective();
    expect(directive).toBeTruthy();
  });

  it('should convert input to uppercase', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');

    inputElement.value = 'hello';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(inputElement.value).toBe('HELLO');
  });
});
