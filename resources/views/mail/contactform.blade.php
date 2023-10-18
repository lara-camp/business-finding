
<x-mail::message>
    - **First Name:** {{$data['first_name']}}
    - **Last Name:** {{$data['last_name']}}
    - **Phone:** {{$data['phone_one']}} , {{$data['phone_two']}}
    - **Location:** {{$data['location']}}
    
    ## Remarks
    
    {{$data['remark']}}
 
Thanks,<br>
{{ config('app.name') }}
</x-mail::message>


