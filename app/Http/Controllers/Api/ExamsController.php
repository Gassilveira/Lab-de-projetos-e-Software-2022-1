<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Exam;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Validator;

class ExamsController extends BaseController
{
    public function list()
    {
        $user = Auth::user();

        if($user)
        {
            $exams = Exam::with('patient','clinic')
                ->where('patient_id', $user->id)
                ->paginate(5);

            return $this->sendResponse($exams, '');
        }else{
            return $this->sendError('Unauthorised.', ['error' => 'User not found']);
        }
    }

    public function share()
    {
        $user = Auth::user();

        if($user)
        {
            if($user->share_code != null) {
                return $this->sendResponse(['code' => $user->share_code], 'You are sharing!');
            }else {
                $user->share_code = Str::random(25);
                $user->save();
                return $this->sendResponse(['code' => $user->share_code], 'You are sharing!');
            }
        }else{
            return $this->sendError('Unauthorised.', ['error' => 'User not found']);
        }
    }

    public function unshare()
    {
        $user = Auth::user();

        if($user)
        {
            $user->share_code = null;
            $user->save();
            return $this->sendResponse([], 'Share disabled!');
        }else{
            return $this->sendError('Unauthorised.', ['error' => 'User not found']);
        }
    }

    public function history(Request $request, $code)
    {
        $validator = Validator::make(['code' => $code], [
            'code' => 'required|String',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }
        $code = strip_tags($request->code);
        $user = User::where('share_code', $code)->first();

        if($user){
            $exams = Exam::with('patient','clinic')
                ->where('patient_id', $user->id)
                ->paginate(5);

            return $this->sendResponse($exams, '');
        }else{
            return $this->sendError('Unauthorised.', ['error' => 'No history to share']);
        }
    }

    public function get(Request $request, $file)
    {
        $fileName = str_replace("-", "/", $file);

        $exam = Exam::where('url', $file)->first();
        if(!$exam){
            return $this->sendError('Not found.', ['error' => 'Exam not found'], 401);
        }
        $user = User::find($exam->patient_id);

        if($user->share_code == ""){
            return $this->sendError('Unauthorised.', ['error' => 'Share not allowed']);
        }
        $fileExtencion = explode(".", $fileName)[1];

        $headers = array(
            'Content-Type: application/*',
        );

        return  Storage::download($fileName,'filename.' . $fileExtencion,$headers);
    }
}
