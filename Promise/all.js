/**
 * 返回一个promise，该promise会等iterable参数内的所有promise都被resolve后被resolve，
 * 或以第一个promise被reject的原因而reject 。
 *
 * Promise.all(iterable);
 * 	iterable
 * 		一个可迭代对象，比如Array。参见iterable.
 */