#include<iostream>
using namespace std;
class A{
    public:
    A(int x){
        cout<<"A"<<x;
    }
};
class B:public A{
    public:
    B(int x):A(x){
        cout<<"B"<<x;
    }
};
int main()
{
    B obj(12);
    return 0;//op is A12B12
}