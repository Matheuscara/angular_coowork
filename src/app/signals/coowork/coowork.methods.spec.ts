// import { CooworkService } from '../../services/coowork.service';
// import { CooworkMethods } from './coowork.methods';
// import { of, throwError } from 'rxjs';
// import { initialState } from './coowork.state';
// import { getAllCooworksMock } from '../../utils/mocks/cooworks/cooworks.examples';

// describe('CooworkMethods', () => {
//   let cooworkServiceSpy: jasmine.SpyObj<CooworkService>;
//   let store: any; // Você pode usar um objeto mockado para simular o estado do store

//   beforeEach(() => {
//     cooworkServiceSpy = jasmine.createSpyObj('CooworkService', ['getAll', 'getById']);
//     store = {
//       cooworkList: initialState.cooworkList
//     };
//   });

//   it('should call CooworkService.getAll and update store correctly', () => {
//     const cooworks = [{ id: 1, name: 'Coowork 1' }, { id: 2, name: 'Coowork 2' }];
//     cooworkServiceSpy.getAll.and.returnValue(of(getAllCooworksMock));

//     const cooworkMethods = CooworkMethods();
//     cooworkMethods(CooworkStore).methods.getAll().subscribe(() => {
//       expect(cooworkServiceSpy.getAll).toHaveBeenCalled();
//       expect(store.cooworkList.loading).toBe(false);
//       expect(store.cooworkList.error).toBe('');
//       expect(store.cooworkList.success).toBe(true);
//       expect(store.cooworkList.cooworks).toEqual(cooworks);
//     });
//   });

//   it('should handle error when calling CooworkService.getAll', () => {
//     const errorMessage = 'An error occurred';
//     cooworkServiceSpy.getAll.and.returnValue(throwError(errorMessage));

//     const cooworkMethods = CooworkMethods();
//     cooworkMethods.getAll().subscribe(() => {}, (error) => {
//       expect(cooworkServiceSpy.getAll).toHaveBeenCalled();
//       expect(store.cooworkList.loading).toBe(false);
//       expect(store.cooworkList.error).toBe('');
//       expect(store.cooworkList.success).toBe(false);
//       expect(store.cooworkList.cooworks).toEqual([]);
//     });
//   });

//   // Testes semelhantes para os outros métodos (getById, resetCooworks)
// });



